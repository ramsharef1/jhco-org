import { generatePageMetadata } from '@/lib/seo';
import ClientPage from './_client';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('campaigns', locale);
}

export default function Page(props: { params: Promise<{ locale: string; id: string }> }) {
  return <ClientPage {...props} />;
}
