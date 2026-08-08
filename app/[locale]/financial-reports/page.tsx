import { generatePageMetadata } from '@/lib/seo';
import ClientPage from './_client';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('financial-reports', locale);
}

export default function Page(props: { params: Promise<{ locale: string }> }) {
  return <ClientPage {...props} />;
}
