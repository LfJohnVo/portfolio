import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PROFILE } from "@/data/portfolio";
import { LangProvider } from "@/context/LangContext";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});
const SITE_URL = "https://lfjohnvo.dev";
export const metadata: Metadata = {
  title: {
    default: "Jonathan Vargas — Software Engineering Manager & Full Stack Developer",
    template: "%s | Jonathan Vargas",
  },
  description:
    "Jonathan Vargas is a Software Engineering Manager and Full Stack Developer based in México, specializing in Laravel, Go, Next.js, AI/LLMs, Software Architecture, DevOps, and Blockchain. 10+ years building scalable, high-impact systems.",
  keywords: [
    "Jonathan Vargas",
    "Software Engineering Manager",
    "Full Stack Developer",
    "Laravel",
    "Go",
    "Next.js",
    "AI",
    "LLMs",
    "Software Architecture",
    "DevOps",
    "Blockchain",
    "México",
    "LfJohnVo",
  ],
  authors: [{ name: "Jonathan Vargas", url: SITE_URL }],
  creator: "Jonathan Vargas",
  publisher: "Jonathan Vargas",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Jonathan Vargas Portfolio",
    title: "Jonathan Vargas — Software Engineering Manager & Full Stack Developer",
    description:
      "Building scalable systems, AI-powered products, and high-performing engineering teams. Based in México.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonathan Vargas — Software Engineering Manager",
    description:
      "Building scalable systems, AI-powered products, and high-performing engineering teams.",
    creator: "@LfJohnVo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
};
export const viewport: Viewport = {
  themeColor: "#020817",
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased overflow-x-hidden">
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
