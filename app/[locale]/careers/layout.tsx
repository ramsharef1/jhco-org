import { type Locale } from '@/lib/i18n';

export default function CareersLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return <>{children}</>;
}
