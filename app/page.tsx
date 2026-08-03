import { redirect } from 'next/navigation';

// Force Vercel cache clear
export default function RootPage() {
  redirect('/en');
}
