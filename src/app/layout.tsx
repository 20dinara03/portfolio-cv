import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/profile";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteDescription =
  "Full-stack developer with commercial React, Next.js and TypeScript experience, MSc in Computer Science from FIT VUT, and Java/Spring backend foundation. Relocating to Bratislava, Slovakia.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.portfolio),
  title: {
    default: `${profile.name} | Full-stack Developer`,
    template: `%s | ${profile.name}`,
  },
  description: siteDescription,
  keywords: [
    "Full-stack Developer",
    "React",
    "TypeScript",
    "Next.js",
    "Java",
    "Spring",
    "Software Developer",
    "Bratislava",
    "Slovakia",
    "Frontend Developer",
    "VUT FIT",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${profile.name} | Full-stack Developer`,
    description: siteDescription,
    type: "website",
    locale: "en_US",
    url: profile.portfolio,
    siteName: `${profile.name} — Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Full-stack Developer`,
    description: siteDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jetbrains.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
