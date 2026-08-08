'use client';

import { useState, useMemo } from 'react';
import { programs } from '@/lib/mockData';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface ProgramImpactMetric {
  label: string;
  value: string;
  icon: string;
  description: string;
}

interface SuccessStory {
  title: string;
  subtitle: string;
  content: string;
}

// Extended program data with impact metrics and stories
const programImpactData: Record<string, { metrics: ProgramImpactMetric[], stories: SuccessStory[] }> = {
  'gaza-aid': {
    metrics: [
      {
        label: 'Families Supported',
        value: '15,000+',
        icon: '👨‍👩‍👧‍👦',
        description: 'Families receiving direct humanitarian assistance',
      },
      {
        label: 'Emergency Supplies Distributed',
        value: '45,000+',
        icon: '📦',
        description: 'Food packages, medical supplies, and essentials',
      },
      {
        label: 'Medical Interventions',
        value: '8,500+',
        icon: '⚕️',
        description: 'Healthcare services and treatments provided',
      },
      {
        label: 'Shelter Support',
        value: '3,200+',
        icon: '🏠',
        description: 'Emergency housing and temporary shelters',
      },
    ],
    stories: [
      {
        title: 'Al-Rashid Family: From Crisis to Stability',
        subtitle: 'Emergency relief restored hope during the darkest hours',
        content: 'The Al-Rashid family of seven lost their home in the crisis. JHCO provided emergency shelter, food packages, medical care for their elderly mother, and clothing for the children. Within months, the family is rebuilding their lives. "The JHCO team treated us like family," says Um Ahmed, the mother. "They didn\'t just give us supplies; they gave us dignity and hope."',
      },
      {
        title: 'Dr. Samia\'s Medical Clinic: Healing a Community',
        subtitle: 'Healthcare services reached 1,200+ patients in three months',
        content: 'Dr. Samia, a volunteer physician supported by JHCO, established a mobile medical clinic. She treated patients with chronic conditions, delivered prenatal care to pregnant women, and provided emergency services. "JHCO provided medicine and equipment when the pharmacies were empty. We saved lives that wouldn\'t have been saved otherwise," she reflects.',
      },
    ],
  },
  'amputees-gaza': {
    metrics: [
      {
        label: 'Amputees Supported',
        value: '850+',
        icon: '💪',
        description: 'Individuals receiving prosthetic and rehabilitation services',
      },
      {
        label: 'Prosthetics Fitted',
        value: '950+',
        icon: '🦾',
        description: 'Custom-made prosthetic limbs and devices',
      },
      {
        label: 'Rehabilitation Sessions',
        value: '5,600+',
        icon: '🏋️',
        description: 'Physical therapy and rehabilitation programs',
      },
      {
        label: 'Psychosocial Support',
        value: '1,200+',
        icon: '❤️',
        description: 'Mental health and counseling sessions',
      },
    ],
    stories: [
      {
        title: 'Mohammad\'s Second Chance: From Despair to Hope',
        subtitle: 'A young engineer learns to walk and work again',
        content: 'Mohammad, a 28-year-old engineer, lost both legs in the crisis. Devastated and hopeless, he refused to leave his home. JHCO\'s prosthetics team visited him repeatedly, introducing state-of-the-art prosthetics and a comprehensive rehabilitation program. Today, Mohammad walks independently, has returned to work part-time in a design role, and mentors other amputees. "JHCO gave me my life back," he says with tears of gratitude.',
      },
      {
        title: 'Amina\'s Journey: From Victim to Advocate',
        subtitle: 'A young woman becomes a peer counselor',
        content: 'Amina, a 19-year-old, lost her right arm. Through JHCO\'s psychosocial support and rehabilitation, she not only adjusted to her amputation but became a peer counselor for other amputees. She now conducts group sessions, sharing her journey and inspiring others. "My disability doesn\'t define me. JHCO helped me see my strength," she shares.',
      },
    ],
  },
  'clothing-bank': {
    metrics: [
      {
        label: 'People Clothed',
        value: '25,000+',
        icon: '👕',
        description: 'Individuals receiving quality clothing',
      },
      {
        label: 'Garments Distributed',
        value: '120,000+',
        icon: '🧥',
        description: 'Clothes in various styles and seasons',
      },
      {
        label: 'Families Served',
        value: '6,800+',
        icon: '👪',
        description: 'Families meeting basic clothing needs',
      },
      {
        label: 'Women Tailors Employed',
        value: '45+',
        icon: '✂️',
        description: 'Local jobs created in garment repair and customization',
      },
    ],
    stories: [
      {
        title: 'Fatima\'s Tailor Shop: Dignity Through Employment',
        subtitle: 'A single mother becomes a breadwinner',
        content: 'Fatima, a single mother of four, was struggling to make ends meet. Through the Clothing Bank Initiative\'s tailoring program, she learned advanced sewing skills and now repairs and customizes clothing for the program. She earns a stable income, sends her children to school, and has become a respected skill trainer for other women in her community.',
      },
      {
        title: 'School Uniforms: Breaking Barriers to Education',
        subtitle: 'Children return to classrooms with dignity',
        content: 'Thousands of children couldn\'t attend school because they lacked proper uniforms. The Clothing Bank Initiative distributed 8,000 new uniforms, allowing children to return to school with confidence. "The uniform made me feel like a real student," says 12-year-old Yasmin. "I had almost given up hope of continuing my education."',
      },
    ],
  },
  'education': {
    metrics: [
      {
        label: 'Students Empowered',
        value: '8,500+',
        icon: '📚',
        description: 'Students receiving scholarships and support',
      },
      {
        label: 'Scholarships Awarded',
        value: '3,400+',
        icon: '🎓',
        description: 'Full and partial scholarships provided',
      },
      {
        label: 'Learning Materials Distributed',
        value: '34,000+',
        icon: '📖',
        description: 'Textbooks, notebooks, and educational supplies',
      },
      {
        label: 'School Enrollment',
        value: '95%',
        icon: '✏️',
        description: 'Scholarship recipients staying in school',
      },
    ],
    stories: [
      {
        title: 'Zahra\'s Dream: From Dropout to Doctor',
        subtitle: 'A brilliant student realizes her potential',
        content: 'Zahra came from a family unable to afford school fees. Her exceptional grades earned her an JHCO scholarship. With educational support and mentorship, she excelled, eventually gaining admission to medical school. "JHCO didn\'t just pay for school; they believed in my dream when I had almost stopped believing," Zahra reflects, now in her second year of medical studies.',
      },
      {
        title: 'Community Learning Centers: Bridging the Gap',
        subtitle: 'Tutoring programs improve retention rates',
        content: 'JHCO established 12 community learning centers providing free tutoring and study support. With trained volunteer tutors, these centers serve 2,000 students annually. Pass rates in core subjects have improved by 40%, and dropout rates have fallen by 60%.',
      },
    ],
  },
  'healthcare': {
    metrics: [
      {
        label: 'Patients Treated',
        value: '12,000+',
        icon: '🏥',
        description: 'Annual patient consultations and treatments',
      },
      {
        label: 'Medical Clinics',
        value: '18+',
        icon: '🏨',
        description: 'Operating facilities across regions',
      },
      {
        label: 'Free Surgeries',
        value: '1,200+',
        icon: '🔬',
        description: 'Complex surgical procedures performed',
      },
      {
        label: 'Health Education',
        value: '450+',
        icon: '💊',
        description: 'Community health education sessions',
      },
    ],
    stories: [
      {
        title: 'Ahmed\'s Heart Surgery: A Second Life',
        subtitle: 'A child\'s life transformed by free medical care',
        content: 'Eight-year-old Ahmed had a critical heart condition but his family couldn\'t afford surgery. JHCO\'s Medical Clinics Network arranged specialist care and covered all expenses. The successful surgery has given Ahmed a new lease on life. He now plays football with friends, something he could never do before. His father says, "JHCO didn\'t just save my son\'s life; they saved our entire family\'s future."',
      },
      {
        title: 'Dr. Hassan\'s Mission: Healthcare for the Unreached',
        subtitle: 'Mobile clinics bring healthcare to remote areas',
        content: 'Dr. Hassan coordinates JHCO\'s mobile clinic program, bringing healthcare to mountainous and remote regions. Each month, his team travels to villages that don\'t have access to medical services. In one year, they conducted 3,000 consultations, identified and treated chronic diseases, and delivered health education. "These communities were completely forgotten. JHCO gives them a voice and healthcare," Dr. Hassan says.',
      },
    ],
  },
  'livelihoods': {
    metrics: [
      {
        label: 'People Trained',
        value: '6,200+',
        icon: '🛠️',
        description: 'Individuals receiving vocational skills training',
      },
      {
        label: 'Income-Generating Projects',
        value: '2,800+',
        icon: '💼',
        description: 'Small businesses and enterprises established',
      },
      {
        label: 'Job Placements',
        value: '4,100+',
        icon: '👨‍💼',
        description: 'Successful employment placements',
      },
      {
        label: 'Avg Income Increase',
        value: '180%',
        icon: '📈',
        description: 'Average income growth after training',
      },
    ],
    stories: [
      {
        title: 'Karim\'s Carpentry Business: From Poverty to Prosperity',
        subtitle: 'Vocational training creates family stability',
        content: 'Karim was unemployed for two years, watching his family\'s condition deteriorate. He enrolled in JHCO\'s carpentry training program. With initial equipment support and business mentoring, he started his own workshop. Within two years, Karim\'s business is thriving, he\'s employed three apprentices, and his children are in school. "The training changed everything. I\'m not just earning income; I\'m building a legacy," Karim reflects.',
      },
      {
        title: 'Women\'s Microfinance Circle: Building Together',
        subtitle: 'Collective action creates sustainable livelihoods',
        content: 'Twelve women in a rural area formed a microfinance circle supported by JHCO\'s livelihood program. Each trained in different skills—baking, sewing, agriculture—they support each other\'s businesses. Their combined income increased by 250% in two years. They now mentor other women\'s groups and have become economic drivers in their community.',
      },
    ],
  },
};

export default function ProgramsImpactPage() {
  const params = useParams();
  const locale = (params.locale as string) || 'en';
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const [selectedPrograms, setSelectedPrograms] = useState<string[]>(['gaza-aid', 'education']);
  const [comparisonMode, setComparisonMode] = useState(false);
  const [generatingReport, setGeneratingReport] = useState(false);

  // Get program data for selected programs
  const getSelectedProgramData = useMemo(() => {
    return selectedPrograms.map(slug => {
      const program = programs.find(p => p.slug === slug);
      return {
        program,
        impact: programImpactData[slug] || { metrics: [], stories: [] },
      };
    });
  }, [selectedPrograms]);

  // Handle program selection
  const handleProgramToggle = (slug: string) => {
    setSelectedPrograms(prev => {
      if (prev.includes(slug)) {
        return prev.filter(s => s !== slug);
      } else if (prev.length < 4) {
        return [...prev, slug];
      }
      return prev;
    });
  };

  // Extract all unique metrics for comparison
  const getComparisonMetrics = useMemo(() => {
    if (!comparisonMode || selectedPrograms.length < 2) return [];

    const firstProgram = getSelectedProgramData[0]?.impact;
    return firstProgram?.metrics || [];
  }, [comparisonMode, selectedPrograms, getSelectedProgramData]);

  // Download report
  const handleDownloadReport = async () => {
    setGeneratingReport(true);
    try {
      // Simulate report generation
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Create CSV content
      let csvContent = 'JHCO Impact by Program Report\n\n';

      getSelectedProgramData.forEach(({ program, impact }) => {
        const programName = ar ? program?.nameAr : program?.name;
        csvContent += `Program: ${programName}\n`;
        csvContent += `Impact Metrics:\n`;

        impact.metrics.forEach(metric => {
          csvContent += `${metric.label},${metric.value}\n`;
        });
        csvContent += '\n';
      });

      // Create and trigger download
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent));
      element.setAttribute('download', `JHCO-Impact-Report-${new Date().toISOString().split('T')[0]}.csv`);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    } finally {
      setGeneratingReport(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '80px 32px', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '0 0 24px 0', fontFamily: 'Georgia, serif' }}>
            {ar ? 'التأثير حسب البرنامج' : 'Impact by Program'}
          </h1>
          <p style={{ fontSize: '18px', color: '#d4af37', margin: 0, maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            {ar
              ? 'استكشف النتائج الملموسة لكل برنامج وشاهد التغييرات الفعلية التي نحدثها'
              : 'Explore the tangible results of each program and see the real change we\'re making'}
          </p>
        </div>
      </section>

      {/* Program Selector */}
      <section style={{ backgroundColor: '#f9f7f4', padding: '60px 32px', borderBottom: '2px solid #d4af37' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#0a1428', marginBottom: '32px', marginTop: 0 }}>
            {ar ? 'اختر البرامج للمقارنة' : 'Select Programs (up to 4)'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '32px' }}>
            {programs.map(program => (
              <button
                key={program.slug}
                onClick={() => handleProgramToggle(program.slug)}
                style={{
                  padding: '16px',
                  border: selectedPrograms.includes(program.slug) ? '2px solid #d4af37' : '2px solid #e8e4db',
                  borderRadius: '8px',
                  backgroundColor: selectedPrograms.includes(program.slug) ? '#fffaf7' : 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  textAlign: 'left',
                  boxShadow: selectedPrograms.includes(program.slug) ? '0 4px 12px rgba(212,175,55,0.2)' : 'none',
                }}
                onMouseOver={(e) => {
                  if (!selectedPrograms.includes(program.slug)) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = '#d4af37';
                  }
                }}
                onMouseOut={(e) => {
                  if (!selectedPrograms.includes(program.slug)) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = '#e8e4db';
                  }
                }}
              >
                <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '600', color: '#0a1428' }}>
                  {ar ? program.nameAr : program.name}
                </h3>
                <p style={{ margin: 0, fontSize: '13px', color: '#d4af37', fontWeight: '700' }}>
                  {ar ? program.impactAr : program.impact}
                </p>
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setComparisonMode(!comparisonMode)}
              style={{
                padding: '12px 24px',
                backgroundColor: comparisonMode ? '#d4af37' : '#0a1428',
                color: comparisonMode ? '#0a1428' : '#d4af37',
                border: 'none',
                borderRadius: '4px',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.3s',
              }}
              onMouseOver={(e) => {
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.transform = 'translateY(0)';
              }}
            >
              {ar ? '📊 مقارنة البرامج' : '📊 Compare Programs'}
            </button>
            <button
              onClick={handleDownloadReport}
              disabled={generatingReport}
              style={{
                padding: '12px 24px',
                backgroundColor: '#0a1428',
                color: '#d4af37',
                border: '2px solid #d4af37',
                borderRadius: '4px',
                fontWeight: '700',
                cursor: generatingReport ? 'not-allowed' : 'pointer',
                fontSize: '14px',
                transition: 'all 0.3s',
                opacity: generatingReport ? 0.6 : 1,
              }}
              onMouseOver={(e) => {
                if (!generatingReport) {
                  const btn = e.currentTarget as HTMLButtonElement;
                  btn.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseOut={(e) => {
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.transform = 'translateY(0)';
              }}
            >
              {generatingReport ? (ar ? '⏳ جاري الإنشاء...' : '⏳ Generating...') : (ar ? '📥 تحميل التقرير' : '📥 Download Report')}
            </button>
          </div>
        </div>
      </section>

      {/* Comparison View */}
      {comparisonMode && selectedPrograms.length >= 2 && (
        <section style={{ backgroundColor: 'white', padding: '60px 32px', borderBottom: '1px solid #e8e4db' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#0a1428', marginBottom: '40px', marginTop: 0, fontFamily: 'Georgia, serif' }}>
              {ar ? 'مقارنة البرامج' : 'Program Comparison'}
            </h2>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #d4af37' }}>
                    <th style={{ padding: '16px', textAlign: 'left', fontWeight: '700', color: '#0a1428', fontSize: '14px' }}>
                      {ar ? 'المقياس' : 'Metric'}
                    </th>
                    {getSelectedProgramData.map(({ program }) => (
                      <th
                        key={program?.slug}
                        style={{
                          padding: '16px',
                          textAlign: 'center',
                          fontWeight: '700',
                          color: '#0a1428',
                          fontSize: '14px',
                          minWidth: '200px',
                        }}
                      >
                        {ar ? program?.nameAr : program?.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {getComparisonMetrics.map((metric, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #e8e4db' }}>
                      <td style={{ padding: '16px', fontWeight: '600', color: '#0a1428' }}>
                        <span style={{ marginRight: '8px' }}>{metric.icon}</span>
                        {metric.label}
                      </td>
                      {getSelectedProgramData.map(({ impact, program }) => (
                        <td
                          key={program?.slug}
                          style={{
                            padding: '16px',
                            textAlign: 'center',
                            color: '#d4af37',
                            fontWeight: '700',
                            fontSize: '16px',
                          }}
                        >
                          {impact.metrics[idx]?.value || '—'}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Impact Metrics for Selected Programs */}
      {getSelectedProgramData.map(({ program, impact }) => (
        <section key={program?.slug} style={{ backgroundColor: 'white', padding: '60px 32px', borderBottom: '1px solid #e8e4db' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#0a1428', marginBottom: '12px', marginTop: 0, fontFamily: 'Georgia, serif' }}>
                {ar ? program?.nameAr : program?.name}
              </h2>
              <p style={{ fontSize: '16px', color: '#6b6b6b', margin: 0, maxWidth: '700px' }}>
                {ar ? program?.descriptionAr : program?.description}
              </p>
            </div>

            {/* Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>
              {impact.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#fffaf7',
                    border: '2px solid #e8e4db',
                    borderRadius: '8px',
                    padding: '32px 24px',
                    textAlign: 'center',
                    transition: 'all 0.3s',
                  }}
                  onMouseOver={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = '#d4af37';
                    el.style.boxShadow = '0 8px 24px rgba(212,175,55,0.15)';
                  }}
                  onMouseOut={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = '#e8e4db';
                    el.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ fontSize: '48px', marginBottom: '12px' }}>{metric.icon}</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', color: '#d4af37', marginBottom: '8px' }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                    {metric.label}
                  </div>
                  <div style={{ fontSize: '13px', color: '#6b6b6b', lineHeight: '1.5' }}>
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Success Stories */}
            <div style={{ marginBottom: '48px' }}>
              <h3 style={{ fontSize: '28px', fontWeight: '400', color: '#0a1428', marginBottom: '32px', marginTop: 0, fontFamily: 'Georgia, serif' }}>
                {ar ? 'قصص النجاح' : 'Success Stories'}
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                {impact.stories.map((story, idx) => (
                  <div key={idx} style={{ backgroundColor: '#f9f7f4', borderRadius: '8px', padding: '32px', borderLeft: '4px solid #d4af37' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#0a1428', marginBottom: '8px', marginTop: 0 }}>
                      {story.title}
                    </h4>
                    <p style={{ fontSize: '14px', color: '#d4af37', fontWeight: '600', marginBottom: '16px', margin: '0 0 16px 0' }}>
                      {story.subtitle}
                    </p>
                    <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.7', margin: 0 }}>
                      {story.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section style={{ backgroundColor: '#0a1428', padding: '80px 32px', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: '400', marginBottom: '24px', marginTop: 0, fontFamily: 'Georgia, serif' }}>
            {ar ? 'كن جزءًا من هذا التأثير' : 'Be Part of This Impact'}
          </h2>
          <p style={{ fontSize: '18px', color: '#d4af37', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            {ar
              ? 'ساهم في دعم البرامج التي تُحدث الفرق الحقيقي في حياة الملايين'
              : 'Support the programs making real difference in the lives of millions'}
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href={`${base}/get-involved/donate`}
              style={{
                display: 'inline-block',
                padding: '16px 48px',
                backgroundColor: '#d4af37',
                color: '#0a1428',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: '700',
                fontSize: '16px',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 24px rgba(212,175,55,0.3)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
              }}
            >
              {ar ? 'تبرع الآن' : 'Donate Now'}
            </Link>
            <Link
              href={`${base}/programs`}
              style={{
                display: 'inline-block',
                padding: '16px 48px',
                backgroundColor: 'transparent',
                color: '#d4af37',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: '700',
                fontSize: '16px',
                border: '2px solid #d4af37',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = '#d4af37';
                el.style.color = '#0a1428';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = 'transparent';
                el.style.color = '#d4af37';
              }}
            >
              {ar ? 'استكشف جميع البرامج' : 'Explore All Programs'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
