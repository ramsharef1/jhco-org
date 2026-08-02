// Regional configuration with warm design system colors and gradients
// Each region gets a unique gradient, primary, and secondary accent color

export const regionColors = {
  asia: {
    // Navy to Teal: Compassion + Hopeful growth
    gradient: 'linear-gradient(135deg, rgba(10,20,40,0.95) 0%, rgba(26,188,156,0.95) 100%)',
    primary: '#1abc9c',
    secondary: '#3498db',
    statColor: 'teal' as const,
    cardColor: 'teal' as const,
    storyColor: 'teal' as const,
    ctaBg: 'hopeful' as const,
    icon: '🌏',
  },
  africa: {
    // Coral to Gold: Energy + Warmth, resilience + strength
    gradient: 'linear-gradient(135deg, rgba(255,107,107,0.95) 0%, rgba(232,185,35,0.95) 100%)',
    primary: '#ff6b6b',
    secondary: '#e8b923',
    statColor: 'coral' as const,
    cardColor: 'coral' as const,
    storyColor: 'coral' as const,
    ctaBg: 'compassionate' as const,
    icon: '🌍',
  },
  europe: {
    // Navy to Gold: Authority + Warmth, stability + hope
    gradient: 'linear-gradient(135deg, rgba(10,20,40,0.95) 0%, rgba(232,185,35,0.95) 100%)',
    primary: '#e8b923',
    secondary: '#0a1428',
    statColor: 'gold' as const,
    cardColor: 'gold' as const,
    storyColor: 'gold' as const,
    ctaBg: 'warm' as const,
    icon: '🏰',
  },
  americas: {
    // Green to Teal: Sustainability + Growth, life + recovery
    gradient: 'linear-gradient(135deg, rgba(39,174,96,0.95) 0%, rgba(26,188,156,0.95) 100%)',
    primary: '#27ae60',
    secondary: '#1abc9c',
    statColor: 'green' as const,
    cardColor: 'green' as const,
    storyColor: 'green' as const,
    ctaBg: 'hopeful' as const,
    icon: '🌎',
  },
};

export type RegionSlug = keyof typeof regionColors;

export function isValidRegion(slug: string): slug is RegionSlug {
  return slug in regionColors;
}

export function getRegionConfig(slug: string) {
  return isValidRegion(slug) ? regionColors[slug] : regionColors.asia; // fallback to asia
}
