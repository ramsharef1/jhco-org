'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateFundraiserPage() {
  const params = useParams();
  const router = useRouter();
  const locale = (params.locale as string) || 'en';
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    fundraiserTitle: '',
    cause: 'education',
    goal: '5000',
    story: '',
    targetDate: '',
  });

  const colors = {
    deepRoyal: '#4a148c',
    darkNavy: '#001a4d',
    hashemiteGold: '#d4af37',
    ivoryBg: '#f5f1e8',
    lightBg: '#ffffff',
    textSecondary: '#5a5a6a',
    darkGrayText: '#2c2c2c',
    borderSubtle: '#e8dcc8',
    borderFormal: '#d4c5a9',
  };

  const content = ar ? {
    title: 'أنشئ حملتك',
    subtitle: 'دعنا نقوم ببناء حملة جمع أموال ستغير حياة الناس',

    stepLabel: 'الخطوة',
    of: 'من',

    // Step 1
    step1Title: 'معلومات شخصية',
    yourName: 'اسمك الكامل',
    yourEmail: 'عنوان بريدك الإلكتروني',
    nameRequired: 'الرجاء إدخال اسمك',
    emailRequired: 'الرجاء إدخال بريدك الإلكتروني',

    // Step 2
    step2Title: 'حول حملتك',
    fundraiserTitle: 'اسم الحملة',
    selectCause: 'اختر السبب',
    educationCause: 'التعليم',
    healthCause: 'الصحة',
    emergencyCause: 'الإغاثة الطارئة',
    livelihoodCause: 'سبل العيش',
    otherCause: 'آخر',
    fundraiserGoal: 'الهدف المالي (درهم)',
    titleRequired: 'الرجاء إدخال اسم الحملة',

    // Step 3
    step3Title: 'شارك قصتك',
    tellYourStory: 'قل قصتك (لماذا تجمع أموالاً؟)',
    storyPlaceholder: 'اكتب قصتك هنا... شارك دافعك وتأثيرك المتوقع...',
    targetDate: 'تاريخ الهدف المستهدف',

    // Step 4
    step4Title: 'تأكيد',
    reviewCampaign: 'راجع حملتك',
    campaignReview: 'فيما يلي ملخص حملتك. إذا بدا كل شيء جيداً، فانقر على الإنشاء.',

    back: 'السابق',
    next: 'التالي',
    createCampaign: 'أنشئ الحملة',
    success: 'تم إنشاء حملتك بنجاح!',
  } : {
    title: 'Create Your Campaign',
    subtitle: 'Let\'s build a fundraising campaign that changes lives',

    stepLabel: 'Step',
    of: 'of',

    // Step 1
    step1Title: 'Personal Information',
    yourName: 'Your Full Name',
    yourEmail: 'Your Email Address',
    nameRequired: 'Please enter your name',
    emailRequired: 'Please enter a valid email',

    // Step 2
    step2Title: 'About Your Campaign',
    fundraiserTitle: 'Campaign Title',
    selectCause: 'Select a Cause',
    educationCause: 'Education',
    healthCause: 'Health',
    emergencyCause: 'Emergency Relief',
    livelihoodCause: 'Livelihood',
    otherCause: 'Other',
    fundraiserGoal: 'Fundraising Goal (USD)',
    titleRequired: 'Please enter a campaign title',

    // Step 3
    step3Title: 'Share Your Story',
    tellYourStory: 'Tell Your Story (Why are you fundraising?)',
    storyPlaceholder: 'Write your story here... Share your motivation and expected impact...',
    targetDate: 'Target Date',

    // Step 4
    step4Title: 'Confirmation',
    reviewCampaign: 'Review Your Campaign',
    campaignReview: 'Here\'s a summary of your campaign. If everything looks good, click Create.',

    back: 'Back',
    next: 'Next',
    createCampaign: 'Create Campaign',
    success: 'Campaign created successfully!',
  };

  const causes = [
    { id: 'education', label: content.educationCause },
    { id: 'health', label: content.healthCause },
    { id: 'emergency', label: content.emergencyCause },
    { id: 'livelihood', label: content.livelihoodCause },
    { id: 'other', label: content.otherCause },
  ];

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    // Basic validation
    if (step === 1 && (!formData.name || !formData.email)) {
      alert(formData.name ? content.emailRequired : content.nameRequired);
      return;
    }
    if (step === 2 && !formData.fundraiserTitle) {
      alert(content.titleRequired);
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    alert(content.success);
    router.push(`${base}/give/fundraise`);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          background: `linear-gradient(135deg, ${colors.darkNavy} 0%, ${colors.deepRoyal} 100%)`,
          padding: '100px 32px 60px',
          color: colors.lightBg,
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: ar ? 'right' : 'left' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '12px' }}>
            {content.title}
          </h1>
          <p style={{ fontSize: '18px', opacity: 0.9 }}>
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section dir={ar ? 'rtl' : 'ltr'} style={{ padding: '60px 32px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {/* Progress Bar */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  style={{
                    flex: 1,
                    height: '4px',
                    background: s <= step ? colors.hashemiteGold : colors.borderSubtle,
                    borderRadius: '2px',
                    transition: 'all 300ms',
                  }}
                />
              ))}
            </div>
            <p style={{ fontSize: '12px', color: colors.textSecondary }}>
              {content.stepLabel} {step} {content.of} 4
            </p>
          </div>

          {/* Step 1: Personal Info */}
          {step === 1 && (
            <div style={{ animation: 'fadeIn 300ms' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '32px', color: colors.darkGrayText }}>
                {content.step1Title}
              </h2>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: colors.darkGrayText }}>
                  {content.yourName}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={ar ? 'أحمد محمد' : 'John Doe'}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: `1px solid ${colors.borderFormal}`,
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: colors.darkGrayText }}>
                  {content.yourEmail}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: `1px solid ${colors.borderFormal}`,
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>
          )}

          {/* Step 2: Campaign Info */}
          {step === 2 && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '32px', color: colors.darkGrayText }}>
                {content.step2Title}
              </h2>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: colors.darkGrayText }}>
                  {content.fundraiserTitle}
                </label>
                <input
                  type="text"
                  name="fundraiserTitle"
                  value={formData.fundraiserTitle}
                  onChange={handleInputChange}
                  placeholder={ar ? 'مثال: دعم التعليم في المدارس الريفية' : 'Example: Supporting rural school education'}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: `1px solid ${colors.borderFormal}`,
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: colors.darkGrayText }}>
                  {content.selectCause}
                </label>
                <select
                  name="cause"
                  value={formData.cause}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: `1px solid ${colors.borderFormal}`,
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    backgroundColor: colors.lightBg,
                  }}
                >
                  {causes.map(cause => (
                    <option key={cause.id} value={cause.id}>
                      {cause.label}
                    </option>
                  ))}
                </select>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: colors.darkGrayText }}>
                  {content.fundraiserGoal}
                </label>
                <input
                  type="number"
                  name="goal"
                  value={formData.goal}
                  onChange={handleInputChange}
                  min="100"
                  step="100"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: `1px solid ${colors.borderFormal}`,
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>
          )}

          {/* Step 3: Story */}
          {step === 3 && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '32px', color: colors.darkGrayText }}>
                {content.step3Title}
              </h2>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: colors.darkGrayText }}>
                  {content.tellYourStory}
                </label>
                <textarea
                  name="story"
                  value={formData.story}
                  onChange={handleInputChange}
                  placeholder={content.storyPlaceholder}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: `1px solid ${colors.borderFormal}`,
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    minHeight: '200px',
                    resize: 'vertical',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: colors.darkGrayText }}>
                  {content.targetDate}
                </label>
                <input
                  type="date"
                  name="targetDate"
                  value={formData.targetDate}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: `1px solid ${colors.borderFormal}`,
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {step === 4 && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '32px', color: colors.darkGrayText }}>
                {content.step4Title}
              </h2>
              <div style={{
                background: colors.ivoryBg,
                padding: '24px',
                borderRadius: '8px',
                border: `1px solid ${colors.borderFormal}`,
                marginBottom: '24px',
              }}>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px', color: colors.darkGrayText }}>
                  {content.reviewCampaign}
                </h3>
                <div style={{ fontSize: '14px', lineHeight: '1.8', color: colors.textSecondary }}>
                  <p><strong>{ar ? 'الاسم:' : 'Name:'}</strong> {formData.name}</p>
                  <p><strong>{ar ? 'البريد:' : 'Email:'}</strong> {formData.email}</p>
                  <p><strong>{ar ? 'عنوان الحملة:' : 'Campaign:'}</strong> {formData.fundraiserTitle}</p>
                  <p><strong>{ar ? 'السبب:' : 'Cause:'}</strong> {causes.find(c => c.id === formData.cause)?.label}</p>
                  <p><strong>{ar ? 'الهدف:' : 'Goal:'}</strong> ${formData.goal}</p>
                  <p style={{ marginTop: '12px' }}><strong>{ar ? 'القصة:' : 'Story:'}</strong></p>
                  <p style={{ fontStyle: 'italic', marginLeft: '12px' }}>{formData.story || ar ? '(لم يتم إدخال قصة)' : '(No story entered)'}</p>
                </div>
                <p style={{ marginTop: '16px', fontSize: '13px', color: colors.textSecondary }}>
                  {content.campaignReview}
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '40px', justifyContent: ar ? 'flex-end' : 'flex-start' }}>
            {step > 1 && (
              <button
                onClick={handleBack}
                style={{
                  background: colors.ivoryBg,
                  color: colors.darkGrayText,
                  border: `1px solid ${colors.borderFormal}`,
                  padding: '12px 32px',
                  fontSize: '14px',
                  fontWeight: '600',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'all 300ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.borderSubtle;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = colors.ivoryBg;
                }}
              >
                {content.back}
              </button>
            )}
            {step < 4 && (
              <button
                onClick={handleNext}
                style={{
                  background: colors.deepRoyal,
                  color: colors.lightBg,
                  border: 'none',
                  padding: '12px 32px',
                  fontSize: '14px',
                  fontWeight: '600',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'all 300ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {content.next}
              </button>
            )}
            {step === 4 && (
              <button
                onClick={handleSubmit}
                style={{
                  background: colors.hashemiteGold,
                  color: colors.darkNavy,
                  border: 'none',
                  padding: '12px 32px',
                  fontSize: '14px',
                  fontWeight: '600',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'all 300ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {content.createCampaign}
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
