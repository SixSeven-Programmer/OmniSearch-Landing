import React from "react";
import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";
import { ProductMockup } from "./ProductMockup";
import { WINDOWS_DOWNLOAD_URL } from "../lib/site-config";

export function Hero() {
  return (
    <div className="-mt-[72px] border-b border-[#9BA8AB]/50 dark:border-[#11212D]">
      <ResponsiveHeroBanner
        showHeader={false}
        badgeLabel="Local-First"
        badgeText="Intelligent File Search · Windows 11 · Free"
        title="Search beyond filenames"
        titleLine2="across your entire machine"
        description="OmniSearch helps you find what you're looking for across documents, code, images, audio and video — using keyword precision and local semantic search."
        primaryButtonText="Download for Windows"
        primaryButtonHref={WINDOWS_DOWNLOAD_URL}
        ctaButtonText="Download for Windows"
        ctaButtonHref={WINDOWS_DOWNLOAD_URL}
        secondaryButtonText="Explore how it works"
        secondaryButtonHref="/how-it-works"
        partnersTitle="Powered by local-first indexing & hybrid retrieval architecture"
        partners={[
          {
            label: "SQLite FTS5",
            sublabel: "BM25 Lexical Search",
            href: "/how-it-works",
          },
          {
            label: "EmbeddingGemma",
            sublabel: "Local Dense Vectors",
            href: "/how-it-works",
          },
          {
            label: "ChromaDB",
            sublabel: "Cosine Vector Store",
            href: "/how-it-works",
          },
          {
            label: "RRF Fusion",
            sublabel: "Deterministic Ranking",
            href: "/how-it-works",
          },
          {
            label: "127.0.0.1",
            sublabel: "Zero Cloud Upload",
            href: "/how-it-works",
          },
        ]}
      >
        <ProductMockup />
      </ResponsiveHeroBanner>
    </div>
  );
}
