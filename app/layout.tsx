import type { Metadata } from "next";
import {
  Newsreader,
  Instrument_Serif,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://omnisearch.software"
  ),
  title: "OmniSearch — Search Beyond Filenames",
  description:
    "OmniSearch is a local-first intelligent file search application that helps you find documents, code, images, audio and video using keyword and semantic search.",
  icons: {
    icon: "/assets/aistudio/OmniSearch_Logo_f0580944.png",
    apple: "/assets/aistudio/OmniSearch_Logo_f0580944.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "OmniSearch",
    title: "OmniSearch — Search Beyond Filenames",
    description:
      "OmniSearch is a local-first intelligent file search application that helps you find documents, code, images, audio and video using keyword and semantic search.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OmniSearch — Search Beyond Filenames",
    description:
      "OmniSearch is a local-first intelligent file search application that helps you find documents, code, images, audio and video using keyword and semantic search.",
  },
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
      className={`${newsreader.variable} ${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased font-sans selection:bg-[#4A5C6A]/30 selection:text-[#06141B] dark:selection:bg-[#4A5C6A] dark:selection:text-[#CCD0CF]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
