import React from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { VideoPlaceholderSection } from "../components/VideoPlaceholder";
import { ProblemSection } from "../components/ProblemSection";
import { SearchDemo } from "../components/SearchDemo";
import { ArchitectureFlow } from "../components/ArchitectureFlow";
import { MediaGrid } from "../components/MediaGrid";
import { PreviewDemo } from "../components/PreviewDemo";
import { FolderFilterDemo } from "../components/FolderFilterDemo";
import { LocalFirstSection } from "../components/LocalFirstSection";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { UseCasesSection } from "../components/UseCasesSection";
import { TechnologySection } from "../components/TechnologySection";
import { RoadmapSection } from "../components/RoadmapSection";
import { DownloadCTA } from "../components/DownloadCTA";
import { Footer } from "../components/Footer";
import { SITE_CONFIG } from "../lib/site-config";

export default function OmniSearchLandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_CONFIG.name,
    operatingSystem: "Windows 11",
    applicationCategory: "UtilitiesApplication",
    description: SITE_CONFIG.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="min-h-screen bg-[#EEF1F0] dark:bg-[#000000] text-[#06141B] dark:text-[#CCD0CF] flex flex-col selection:bg-[#0284C7]/20 dark:selection:bg-[#38BDF8]/25 selection:text-[#06141B] dark:selection:text-[#CCD0CF] transition-colors duration-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <VideoPlaceholderSection />
        <ProblemSection />
        <SearchDemo />
        <ArchitectureFlow />
        <MediaGrid />
        <PreviewDemo />
        <FolderFilterDemo />
        <LocalFirstSection />
        <HowItWorksSection />
        <UseCasesSection />
        <TechnologySection />
        <RoadmapSection />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
