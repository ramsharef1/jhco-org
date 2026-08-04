import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JHCO Impact Dashboard',
  description: 'Explore JHCO\'s impact metrics, financial data, and stories from the communities we serve.',
  keywords: ['JHCO', 'Impact', 'Dashboard', 'Transparency', 'Charity'],
  openGraph: {
    title: 'JHCO Impact Dashboard',
    description: 'Discover the impact of JHCO\'s humanitarian programs worldwide.',
    type: 'website',
  },
};

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
