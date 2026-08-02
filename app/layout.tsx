import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JHCO - Jordan Hashemite Charity Organization",
  description: "Humanitarian aid and charitable services across 30+ countries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
