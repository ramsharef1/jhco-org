import { generatePageMetadata } from '@/lib/seo';
import ClientPage from './_client';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; regionSlug: string; countrySlug: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('regions', locale);
}

export default function Page(props: { params: Promise<{ locale: string; regionSlug: string; countrySlug: string }> }) {
  return <ClientPage {...props} />;
}
