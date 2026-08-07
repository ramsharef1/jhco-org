'use client';

// Root 404 for unmatched URLs — reuses the locale-aware page (it infers
// language from the current pathname).
export { default } from './[locale]/not-found';
