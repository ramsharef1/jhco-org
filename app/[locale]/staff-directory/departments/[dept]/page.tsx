import { generatePageMetadata } from '@/lib/seo';
import ClientPage from './_client';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; dept: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('staff-directory/departments', locale);
}

export default function Page(props: { params: Promise<{ locale: string; dept: string }> }) {
  return <ClientPage {...props} />;
}
