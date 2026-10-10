import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { YandexMetrika } from "@/components/YandexMetrika";
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
  "Frontend Developer specializing in React, Next.js and TypeScript, with production SaaS and e-commerce experience.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.portfolio),
  title: {
    default: `${profile.name} | Frontend Developer`,
    template: `%s | ${profile.name}`,
  },
  description: siteDescription,
  keywords: [
    "Frontend Developer",
    "React",
    "TypeScript",
    "Next.js",
    "JavaScript",
    "SaaS",
    "E-commerce",
    "Bratislava",
    "Slovakia",
    "VUT FIT",
    "Application Development",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${profile.name} | Frontend Developer`,
    description: siteDescription,
    type: "website",
    locale: "en_US",
    url: profile.portfolio,
    siteName: `${profile.name} — Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Frontend Developer`,
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
        <YandexMetrika />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
