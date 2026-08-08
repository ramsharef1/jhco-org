import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  title: "JHCO - Jordan Hashemite Charity Organization",
  description: "Humanitarian aid and charitable services across 30+ countries",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = headersList.get("x-locale") || "en";

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
