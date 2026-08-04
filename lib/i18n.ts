// Simple i18n mock for dashboard
// Full implementation with next-intl can be added in Wave 2

export function useTranslation() {
  return {
    t: (key: string) => key,
    language: 'en',
    setLanguage: (lang: string) => {},
  };
}

export const translations = {
  en: {
    dashboard: 'Dashboard',
    metrics: 'Metrics',
    financial: 'Financial',
    stories: 'Stories',
    certifications: 'Certifications',
    testimonials: 'Testimonials',
    volunteer: 'Volunteer',
  },
  ar: {
    dashboard: 'لوحة التحكم',
    metrics: 'المقاييس',
    financial: 'المالية',
    stories: 'القصص',
    certifications: 'الشهادات',
    testimonials: 'الشهادات',
    volunteer: 'التطوع',
  },
};

export async function getDictionary(locale: string) {
  return translations[locale as keyof typeof translations] || translations.en;
}
