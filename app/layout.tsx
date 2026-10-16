import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { brand } from "@/lib/brand";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", style: ["normal", "italic"] });
const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: brand.siteUrl, siteName: brand.name },
  title: `${brand.name} | Farm-fresh A2 milk in glass bottles`,
  description:
    "Fresh, chilled A2 Sahiwal cow and Murrah buffalo milk from Punjab, lab-tested every morning and delivered in glass bottles before 7 AM.",
};

export const viewport: Viewport = { themeColor: "#1B4332" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
