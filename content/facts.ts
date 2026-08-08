// Single source of truth for all recurring facts across the site.
// Every page must import from here — never hardcode these values.
// Items marked TODO:VERIFY need confirmation from the organization.

export const org = {
  nameEn: 'Jordan Hashemite Charity Organization',
  nameAr: 'الهيئة الخيرية الأردنية الهاشمية',
  acronym: 'JHCO',
  foundingYear: 1990,
  patronageEn: 'Hashemite Kingdom of Jordan',
  patronageAr: 'المملكة الأردنية الهاشمية',
  registrationEn: 'Registered under Jordanian Law',
  registrationAr: 'مسجلة بموجب القانون الأردني',
} as const;

export const impact = {
  countriesServed: '30+',
  countriesServedAr: '30+',
  familiesServed: '75,000+',
  familiesServedShort: '75K+',
  familiesServedAr: '75,000+',
  volunteersActive: '2,500+',
  volunteersActiveShort: '2,500+',
  volunteersActiveAr: '2,500+',
  staffCount: '200+',
  staffCountAr: '200+',
  programsRunning: '50+',
  programsRunningAr: '50+',
  aidDelivered: '$50M+',
  aidDeliveredAr: '50M+$',
  yearsOfService: '35+',
  yearsOfServiceAr: '35+',
} as const;

export const contact = {
  hqCityEn: 'Amman, Jordan',
  hqCityAr: 'عمّان، الأردن',
  phone: '+962 (0) 6 123 4567', // TODO:VERIFY — placeholder number
  email: 'info@jhco.org',
  privacyEmail: 'privacy@jhco.org',
  partnerEmail: 'partner@jhco.org',
} as const;

// TODO:VERIFY — all leadership names need confirmation from the organization.
// Currently using generic titles; real names should replace these.
export const leadership = {
  executiveDirector: {
    nameEn: 'Executive Director', // TODO:VERIFY
    nameAr: 'المدير التنفيذي', // TODO:VERIFY
    roleEn: 'Executive Director',
    roleAr: 'المدير التنفيذي',
  },
  deputyDirector: {
    nameEn: 'Deputy Director', // TODO:VERIFY
    nameAr: 'نائب المدير', // TODO:VERIFY
    roleEn: 'Deputy Director',
    roleAr: 'نائب المدير',
  },
  operationsDirector: {
    nameEn: 'Operations Director', // TODO:VERIFY
    nameAr: 'مدير العمليات', // TODO:VERIFY
    roleEn: 'Operations Director',
    roleAr: 'مدير العمليات',
  },
  programsHead: {
    nameEn: 'Head of Programs', // TODO:VERIFY
    nameAr: 'مدير البرامج', // TODO:VERIFY
    roleEn: 'Head of Programs',
    roleAr: 'مدير البرامج',
  },
} as const;

export const social = {
  facebook: 'https://facebook.com/jhco', // TODO:VERIFY
  twitter: 'https://twitter.com/jhco', // TODO:VERIFY
  instagram: 'https://instagram.com/jhco', // TODO:VERIFY
  linkedin: 'https://linkedin.com/company/jhco', // TODO:VERIFY
  youtube: 'https://youtube.com/@jhco', // TODO:VERIFY
} as const;

export const legal = {
  copyrightYear: 2026,
  privacyLastUpdated: 'August 2026',
  privacyLastUpdatedAr: 'أغسطس 2026',
  termsLastUpdated: 'August 2026',
  termsLastUpdatedAr: 'أغسطس 2026',
} as const;
