import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Dinara Garipova — Frontend Developer (React / TypeScript)",
  description:
    "Lead Frontend at WebStead. Production React, Next.js, TypeScript, Redux, REST. Flutter from university projects. Open to Bratislava roles. Based in Kazan, ready to relocate.",
  keywords: [
    "Frontend Developer",
    "React",
    "TypeScript",
    "Next.js",
    "Redux",
    "Vite",
    "REST API",
    "Java",
    "Spring",
    "Flutter",
    "Mobile",
    "Bratislava",
    "Junior Frontend",
    "Full-Stack",
    "WebStead",
    "VUT FIT",
    "KNRTU",
    "Kazan",
    "Portfolio",
  ],
  authors: [{ name: "Dinara Garipova" }],
  openGraph: {
    title: "Dinara Garipova — Frontend Developer (React / TypeScript)",
    description:
      "Production React/TypeScript portfolio · Lead Frontend at WebStead · Open to Bratislava / Slovakia relocation.",
    type: "website",
    locale: "en_US",
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
