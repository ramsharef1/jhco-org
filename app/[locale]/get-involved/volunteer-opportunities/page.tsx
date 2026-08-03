import { volunteerOpportunities } from '@/lib/mockData';
import Link from 'next/link';

export default async function VolunteerOpportunitiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ar = locale === 'ar';
  const base = `/${locale}`;

  // Get unique categories
  const categories = [...new Set(volunteerOpportunities.map(opp => opp.category))];
  const categoryOrder = ['Field', 'Remote', 'Administrative'];
  const sortedCategories = categoryOrder.filter(cat => categories.includes(cat));

  const getCategoryAr = (category: string) => {
    const opp = volunteerOpportunities.find(o => o.category === category);
    return opp?.categoryAr || category;
  };

  // FAQ items
  const faqItems = [
    {
      q: ar ? 'هل هناك حد أدنى للالتزام الزمني؟' : 'Is there a minimum time commitment?',
      a: ar ? 'يختلف الالتزام حسب الفرصة. تتراوح من 8 ساعات/أسبوع للفرص البعيدة إلى 3-6 أشهر للعمل الميداني.' : 'Commitment varies by opportunity, ranging from 8 hours/week for remote roles to 3-6 months for field work.'
    },
    {
      q: ar ? 'هل يجب أن تكون لدي خبرة سابقة؟' : 'Do I need prior experience?',
      a: ar ? 'بعض الفرص تتطلب خبرة معينة، والبعض الآخر منفتح على المتطوعين الجدد. تحقق من متطلبات كل فرصة.' : 'Some opportunities require specific experience, while others are open to new volunteers. Check each opportunity\'s requirements.'
    },
    {
      q: ar ? 'هل هناك تعويض للمتطوعين؟' : 'Are volunteers compensated?',
      a: ar ? 'التطوع غير مدفوع الأجر، لكننا نوفر جميع المواد والدعم اللازم. قد نوفر تعويضات السفر والإقامة للعمل الميداني.' : 'Volunteering is unpaid, but we provide all necessary materials and support. Travel and accommodation may be provided for field work.'
    },
    {
      q: ar ? 'كيف سيتم تقييمي كمتطوع؟' : 'How will I be evaluated?',
      a: ar ? 'سنقدم ملاحظات منتظمة ودعماً طوال فترة التطوع الخاصة بك. سيكون لديك مدير أو موجه لديك.' : 'We provide regular feedback and support throughout your volunteer period. You\'ll have a manager or mentor.'
    },
    {
      q: ar ? 'هل يمكنني التطوع في مجال مختلف بعد الانتهاء؟' : 'Can I volunteer in a different field after?',
      a: ar ? 'بالتأكيد! نحن نشجع المتطوعين على استكشاف فرص مختلفة ومواصلة التطوع معنا.' : 'Absolutely! We encourage volunteers to explore different opportunities and continue volunteering with us.'
    },
    {
      q: ar ? 'هل أحتاج إلى اللغة العربية؟' : 'Do I need Arabic language skills?',
      a: ar ? 'تختلف متطلبات اللغة حسب الفرصة. بعض الأدوار تتطلب العربية، والبعض الآخر للغة الإنجليزية فقط.' : 'Language requirements vary by opportunity. Some roles require Arabic, while others are English-only.'
    },
  ];

  // Volunteer impact stats
  const volunteerStats = [
    {
      icon: '🌍',
      number: volunteerOpportunities.length,
      label: ar ? 'فرص متاحة' : 'Active Opportunities',
      description: ar ? 'في مختلف المجالات والمناطق' : 'Across various fields and regions'
    },
    {
      icon: '👥',
      number: Math.floor(volunteerOpportunities.reduce((sum, opp: any) => sum + (opp.impact.match(/\d+/)?.[0] || 0), 0) / 100),
      label: ar ? 'المتأثرون المتوقعون' : 'Expected Impact',
      description: ar ? 'من خلال جهود المتطوعين' : 'Through volunteer efforts'
    },
    {
      icon: '⏱️',
      number: `${Math.min(...volunteerOpportunities.map((opp: any) => {
        const hours = parseInt(opp.commitment.split('-')[0]);
        return isNaN(hours) ? 100 : hours;
      }))} - ${Math.max(...volunteerOpportunities.map((opp: any) => {
        const parts = opp.commitment.split('-');
        const first = parseInt(parts[0]);
        if (parts[1]?.includes('month')) return 100;
        return isNaN(first) ? 100 : first;
      }))}`,
      label: ar ? 'ساعات الالتزام' : 'Hours/Week Commitment',
      description: ar ? 'متغيرة حسب الفرصة' : 'Varies by opportunity'
    },
    {
      icon: '🎯',
      number: sortedCategories.length,
      label: ar ? 'فئات التطوع' : 'Volunteer Categories',
      description: ar ? 'ميداني، عن بعد، إداري' : 'Field, Remote, Administrative'
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section style={{
        background: 'linear-gradient(135deg, #0a1428 0%, #1a3a52 50%, #0f5a7a 100%)',
        padding: '120px 32px',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '400',
            margin: '0 0 24px 0',
            fontFamily: 'Georgia, serif',
            lineHeight: '1.2'
          }}>
            {ar ? '🤝 انضم إلى فريق التغيير' : '🤝 Join Our Team of Change-Makers'}
          </h1>
          <p style={{
            fontSize: '22px',
            marginBottom: '32px',
            fontWeight: '300',
            lineHeight: '1.6',
            maxWidth: '700px'
          }}>
            {ar ? 'ساهم في إحداث فرق حقيقي في حياة الآلاف. سواء كنت في الميدان أو عن بعد، فإن تطوعك مهم.' : 'Make a real difference in thousands of lives. Whether on the ground or remotely, your volunteer work matters.'}
          </p>
          <div style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap'
          }}>
            <button style={{
              padding: '16px 40px',
              backgroundColor: '#d4af37',
              color: '#0a1428',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 250ms ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}>
              {ar ? '↓ استكشف الفرص' : '↓ Explore Opportunities'}
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

      {/* STATS SECTION */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#f9f7f4',
        borderTop: '4px solid #d4af37'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px'
          }}>
            {volunteerStats.map((stat, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '52px', marginBottom: '16px' }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: typeof stat.number === 'number' ? '36px' : '28px',
                  fontWeight: '700',
                  color: '#0a1428',
                  marginBottom: '8px',
                  fontFamily: typeof stat.number === 'number' ? 'inherit' : 'monospace'
                }}>
                  {stat.number}
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#6b6b6b',
                  margin: '0 0 8px 0',
                  fontWeight: '600'
                }}>
                  {stat.label}
                </p>
                <p style={{
                  fontSize: '12px',
                  color: '#999',
                  margin: '0'
                }}>
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES BY CATEGORY */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          {sortedCategories.map((category) => {
            const categoryOpps = volunteerOpportunities.filter(opp => opp.category === category);
            const categoryColors: Record<string, { bg: string; border: string; icon: string }> = {
              'Field': { bg: '#fff4e6', border: '#ff9800', icon: '🌍' },
              'Remote': { bg: '#e3f2fd', border: '#2196f3', icon: '💻' },
              'Administrative': { bg: '#f3e5f5', border: '#9c27b0', icon: '📋' }
            };
            const colors = categoryColors[category] || { bg: '#f5f5f5', border: '#999', icon: '📌' };

            return (
              <div key={category} style={{ marginBottom: '100px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '48px',
                  borderBottom: `3px solid ${colors.border}`,
                  paddingBottom: '16px'
                }}>
                  <span style={{ fontSize: '36px', marginRight: '16px' }}>
                    {colors.icon}
                  </span>
                  <h2 style={{
                    fontSize: '36px',
                    fontWeight: '400',
                    color: '#0a1428',
                    fontFamily: 'Georgia, serif',
                    margin: '0'
                  }}>
                    {ar ? getCategoryAr(category) : category}
                  </h2>
                  <span style={{
                    fontSize: '14px',
                    color: colors.border,
                    fontWeight: '700',
                    marginLeft: 'auto',
                    backgroundColor: colors.bg,
                    padding: '8px 16px',
                    borderRadius: '20px'
                  }}>
                    {categoryOpps.length} {ar ? 'فرصة' : 'opportunities'}
                  </span>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                  gap: '32px',
                  marginBottom: '40px'
                }}>
                  {categoryOpps.map((opportunity: any) => (
                    <div
                      key={opportunity.id}
                      style={{
                        backgroundColor: 'white',
                        border: `2px solid ${colors.border}`,
                        borderRadius: '12px',
                        overflow: 'hidden',
                        transition: 'all 0.3s',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                        ':hover': {
                          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                          transform: 'translateY(-4px)',
                        },
                      }}
                    >
                      {/* Header */}
                      <div style={{
                        padding: '32px 28px',
                        backgroundColor: colors.bg,
                        borderBottom: `1px solid ${colors.border}`
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'space-between',
                          marginBottom: '16px'
                        }}>
                          <div>
                            <span style={{
                              fontSize: '11px',
                              color: colors.border,
                              fontWeight: '700',
                              textTransform: 'uppercase',
                              letterSpacing: '1px',
                              display: 'inline-block',
                              marginBottom: '12px'
                            }}>
                              {opportunity.icon} {ar ? opportunity.typeAr : opportunity.type}
                            </span>
                            <h3 style={{
                              fontSize: '20px',
                              fontWeight: '600',
                              color: '#0a1428',
                              margin: '0 0 8px 0',
                              lineHeight: '1.4'
                            }}>
                              {ar ? opportunity.titleAr : opportunity.title}
                            </h3>
                          </div>
                        </div>

                        {/* Location & Commitment */}
                        <div style={{
                          display: 'flex',
                          gap: '24px',
                          flexWrap: 'wrap',
                          fontSize: '13px',
                          color: '#6b6b6b'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ fontSize: '14px' }}>📍</span>
                            <span>{ar ? opportunity.locationAr : opportunity.location}</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ fontSize: '14px' }}>⏱️</span>
                            <span>{ar ? opportunity.commitmentAr : opportunity.commitment}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div style={{
                        flex: 1,
                        padding: '28px',
                        display: 'flex',
                        flexDirection: 'column'
                      }}>
                        <p style={{
                          fontSize: '15px',
                          color: '#6b6b6b',
                          lineHeight: '1.6',
                          marginBottom: '20px'
                        }}>
                          {ar ? opportunity.descriptionAr : opportunity.description}
                        </p>

                        {/* Skills */}
                        <div style={{ marginBottom: '24px' }}>
                          <p style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            color: colors.border,
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            marginBottom: '12px'
                          }}>
                            {ar ? 'المهارات المطلوبة' : 'Key Skills'}
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {(ar ? opportunity.skillsAr : opportunity.skills).slice(0, 3).map((skill: string, idx: number) => (
                              <span
                                key={idx}
                                style={{
                                  display: 'inline-block',
                                  fontSize: '12px',
                                  padding: '6px 12px',
                                  backgroundColor: colors.bg,
                                  borderRadius: '6px',
                                  color: '#0a1428',
                                  border: `1px solid ${colors.border}`,
                                  fontWeight: '500'
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                            {(ar ? opportunity.skillsAr : opportunity.skills).length > 3 && (
                              <span style={{
                                fontSize: '12px',
                                color: colors.border,
                                fontWeight: '700',
                                alignSelf: 'center'
                              }}>
                                +{(ar ? opportunity.skillsAr : opportunity.skills).length - 3}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Impact */}
                        <div style={{
                          padding: '16px',
                          backgroundColor: colors.bg,
                          borderRadius: '8px',
                          marginBottom: '20px',
                          borderLeft: `4px solid ${colors.border}`
                        }}>
                          <p style={{
                            fontSize: '11px',
                            color: '#6b6b6b',
                            margin: '0 0 6px 0',
                            fontWeight: '600',
                            textTransform: 'uppercase'
                          }}>
                            {ar ? 'تأثيرك المتوقع' : 'Your Expected Impact'}
                          </p>
                          <p style={{
                            fontSize: '15px',
                            color: '#0a1428',
                            margin: '0',
                            fontWeight: '600'
                          }}>
                            {ar ? opportunity.impactAr : opportunity.impact}
                          </p>
                        </div>

                        {/* Footer */}
                        <div style={{
                          borderTop: `1px solid ${colors.border}`,
                          paddingTop: '16px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginTop: 'auto'
                        }}>
                          <span style={{
                            fontSize: '12px',
                            color: '#28a745',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            backgroundColor: '#e8f5e9',
                            padding: '6px 12px',
                            borderRadius: '4px'
                          }}>
                            {ar ? opportunity.statusAr : opportunity.status}
                          </span>
                          <Link href={`${base}/get-involved/volunteer/opportunities/${opportunity.slug}`} style={{
                            fontSize: '18px',
                            textDecoration: 'none',
                            color: colors.border,
                            fontWeight: '700',
                            transition: 'transform 0.2s'
                          }}>
                            →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY VOLUNTEER SECTION */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#fef9f3',
        borderTop: '4px solid #d4af37'
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
            {ar ? 'لماذا التطوع معنا؟' : 'Why Volunteer With Us?'}
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6b6b6b',
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '600px',
            margin: '0 auto 60px'
          }}>
            {ar ? 'أكثر من مجرد عمل - إنها رحلة تحويلية' : 'It\'s more than work - it\'s a transformative journey'}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px'
          }}>
            {[
              {
                icon: '🌟',
                title: ar ? 'تأثير حقيقي' : 'Real Impact',
                desc: ar ? 'ساهم مباشرة في تغيير حياة الناس بشكل إيجابي' : 'Directly contribute to changing lives for the better'
              },
              {
                icon: '🤝',
                title: ar ? 'تطوير المهارات' : 'Skill Development',
                desc: ar ? 'تعلم مهارات جديدة وطور خبرتك المهنية' : 'Learn new skills and develop professionally'
              },
              {
                icon: '👥',
                title: ar ? 'التواصل والمجتمع' : 'Community & Connections',
                desc: ar ? 'التقي بأشخاص متشابهي التفكير من حول العالم' : 'Connect with like-minded people globally'
              },
              {
                icon: '📈',
                title: ar ? 'السيرة الذاتية' : 'Resume Builder',
                desc: ar ? 'أضف خبرة تطوع ذات مغزى إلى ملفك الشخصي' : 'Add meaningful volunteer experience to your profile'
              },
              {
                icon: '🎓',
                title: ar ? 'فرص التعلم' : 'Learning Opportunities',
                desc: ar ? 'اكتسب معرفة عميقة عن القضايا الإنسانية' : 'Gain deep knowledge about humanitarian issues'
              },
              {
                icon: '❤️',
                title: ar ? 'الرضا الشخصي' : 'Personal Fulfillment',
                desc: ar ? 'جد المعنى والرضا في العمل التطوعي' : 'Find meaning and fulfillment in volunteer work'
              },
            ].map((item, idx) => (
              <div key={idx} style={{
                padding: '36px 28px',
                backgroundColor: 'white',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                borderTop: '4px solid #d4af37',
                transition: 'all 0.3s'
              }}>
                <div style={{ fontSize: '52px', marginBottom: '16px' }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '12px'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#6b6b6b',
                  margin: '0',
                  lineHeight: '1.6'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION STEPS */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: 'white',
        borderTop: '2px solid #d4af37'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '64px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            {ar ? 'كيفية البدء' : 'How to Get Started'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px'
          }}>
            {[
              {
                num: '1',
                icon: '🔍',
                title: ar ? 'اختر فرصتك' : 'Browse Opportunities',
                desc: ar ? 'استكشف الفرص المتاحة وابحث عن ما يناسبك' : 'Explore available opportunities that match your skills'
              },
              {
                num: '2',
                icon: '📝',
                title: ar ? 'قدم طلبك' : 'Submit Application',
                desc: ar ? 'املأ نموذج الطلب بمعلوماتك والسيرة الذاتية' : 'Fill out the application form with your details'
              },
              {
                num: '3',
                icon: '🤝',
                title: ar ? 'المقابلة' : 'Interview',
                desc: ar ? 'تحدث معنا عن تجاربك وتطلعاتك' : 'Tell us about your experience and goals'
              },
              {
                num: '4',
                icon: '🚀',
                title: ar ? 'ابدأ التطوع' : 'Start Volunteering',
                desc: ar ? 'انضم إلى فريقنا واحدث فرقاً' : 'Join our team and make a difference today'
              },
            ].map((step, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  fontSize: '36px',
                  border: '3px solid #d4af37',
                  position: 'relative'
                }}>
                  {step.icon}
                  <span style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '-12px',
                    backgroundColor: '#d4af37',
                    color: '#0a1428',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    fontSize: '16px'
                  }}>
                    {step.num}
                  </span>
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '12px'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#6b6b6b',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Connector lines - visible on larger screens */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginTop: '60px',
            position: 'relative'
          }}>
            {[0, 1, 2, 3].map((idx) => (
              idx < 3 && (
                <div key={idx} style={{
                  position: 'absolute',
                  top: '-30px',
                  left: `calc(${((idx + 1) / 4) * 100}%)`,
                  width: `${(1 / 4) * 100}%`,
                  height: '3px',
                  backgroundColor: '#d4af37',
                  opacity: 0.3
                }} />
              )
            ))}
          </div>
        </div>
      </section>

      {/* VOLUNTEER TESTIMONIAL */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#f9f7f4'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center'
          }}>
            <div style={{
              backgroundColor: '#d4af37',
              borderRadius: '12px',
              padding: '60px 40px',
              textAlign: 'center',
              fontSize: '120px'
            }}>
              🌟
            </div>
            <div>
              <h2 style={{
                fontSize: '42px',
                fontWeight: '400',
                color: '#0a1428',
                marginBottom: '24px',
                fontFamily: 'Georgia, serif'
              }}>
                {ar ? 'صوت متطوع' : 'Volunteer Story'}
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#6b6b6b',
                lineHeight: '1.8',
                marginBottom: '24px'
              }}>
                {ar ? 'أمضيت ثلاثة أشهر كمنسق ميداني في غزة. كانت التجربة صعبة لكنها غيرت حياتي تماماً. رأيت مباشرة كيف قدمت مساعدتنا الأمل للآلاف من الأسر التي تعاني.' : 'I spent three months as a field coordinator in Gaza. It was challenging but completely changed my life. I witnessed firsthand how our help brought hope to thousands of families in need.'}
              </p>
              <blockquote style={{
                fontSize: '20px',
                fontStyle: 'italic',
                color: '#d4af37',
                borderLeft: '4px solid #d4af37',
                paddingLeft: '24px',
                margin: '32px 0',
                fontWeight: '500'
              }}>
                {ar ? '"إذا كنت تتردد، توقف عن التردد. هذه أفضل قرار اتخذته. الفرصة لتغيير الحياة أمامك."' : '"If you\'re hesitant, stop doubting. This was the best decision I\'ve made. The opportunity to change lives is in your hands."'}
              </blockquote>
              <p style={{ fontSize: '16px', color: '#0a1428', fontWeight: '600' }}>
                {ar ? '- سارة أحمد، متطوعة سابقة' : '- Sarah Ahmed, Former Volunteer'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: 'white',
        borderTop: '4px solid #d4af37'
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
                backgroundColor: '#f5e6d3',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 250ms ease',
                borderLeft: '4px solid #d4af37'
              }}>
                <summary style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#0a1428',
                  cursor: 'pointer',
                  userSelect: 'none'
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

      {/* CTA SECTION */}
      <section style={{
        background: 'linear-gradient(135deg, #0a1428 0%, #1a3a52 100%)',
        padding: '80px 32px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            marginBottom: '24px',
            fontFamily: 'Georgia, serif'
          }}>
            {ar ? 'جاهز للانضمام؟' : 'Ready to Make a Difference?'}
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '32px',
            color: '#d4af37',
            maxWidth: '600px',
            margin: '0 auto 32px',
            lineHeight: '1.6'
          }}>
            {ar ? 'اختر فرصة من الفرص أعلاه وابدأ في إحداث تأثير حقيقي اليوم' : 'Choose an opportunity above and start making a real difference today'}
          </p>
          <button style={{
            padding: '18px 48px',
            backgroundColor: '#d4af37',
            color: '#0a1428',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '700',
            fontSize: '18px',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
          }}>
            {ar ? 'استكشف الفرص الآن' : 'Explore Opportunities Now'}
          </button>
        </div>
      </section>

      {/* SUPPORT SECTION */}
      <section style={{
        padding: '48px 32px',
        backgroundColor: '#f9f7f4',
        textAlign: 'center',
        borderTop: '2px solid #d4af37'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{
            fontSize: '18px',
            color: '#0a1428',
            margin: '0 0 16px 0',
            fontWeight: '600'
          }}>
            {ar ? 'هل لديك أسئلة؟' : 'Have Questions?'}
          </p>
          <p style={{
            fontSize: '16px',
            color: '#6b6b6b',
            margin: '0'
          }}>
            {ar ? 'اتصل بفريقنا على ' : 'Contact our team at '}<strong>volunteers@jhco.org</strong>{ar ? ' أو ' : ' or '}<strong>+1 (555) 123-4567</strong>
          </p>
        </div>
      </section>
    </>
  );
}
