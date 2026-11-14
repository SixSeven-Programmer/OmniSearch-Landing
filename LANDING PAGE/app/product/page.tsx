import React from "react";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ProductMockup } from "../../components/ProductMockup";
import { SearchDemo } from "../../components/SearchDemo";
import { MediaGrid } from "../../components/MediaGrid";
import { FolderFilterDemo } from "../../components/FolderFilterDemo";
import { PreviewDemo } from "../../components/PreviewDemo";
import { LocalFirstSection } from "../../components/LocalFirstSection";
import { DownloadCTA } from "../../components/DownloadCTA";
import { WINDOWS_DOWNLOAD_URL } from "../../lib/site-config";

const FEATURE_PILLARS = [
  {
    id: "search",
    title: "Search",
    summary:
      "Fast lexical BM25 retrieval built on SQLite FTS5 with custom column weights, phrase matching, and prefix wildcards.",
  },
  {
    id: "semantic-search",
    title: "Semantic Search",
    summary:
      "Conceptual search powered by local EmbeddingGemma 2 dense vectors and ChromaDB cosine similarity.",
  },
  {
    id: "multiformat-support",
    title: "Multiformat Support",
    summary:
      "Dedicated extractors for PDF, DOCX, PPTX, XLSX, CSV, HTML, Markdown, and source code.",
  },
  {
    id: "media-search",
    title: "Media Search",
    summary:
      "Unified discovery across images, audio recordings, and video files alongside traditional documents.",
  },
  {
    id: "folder-filtering",
    title: "Folder Filtering",
    summary:
      "Scope queries to specific registered directories or search across your entire indexed library.",
  },
  {
    id: "preview",
    title: "Preview",
    summary:
      "Inspect highlighted snippets and exact page, slide, sheet, or line coordinates before opening a file.",
  },
  {
    id: "local-first",
    title: "Local-first Architecture",
    summary:
      "All indexing, embeddings, and search execution run locally on 127.0.0.1 with zero cloud upload.",
  },
];

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-[#EEF1F0] dark:bg-[#000000] text-[#06141B] dark:text-[#CCD0CF] flex flex-col transition-colors duration-200">
      <Navbar />

      <main className="flex-1">
        {/* Product Overview Header */}
        <section className="py-20 sm:py-24 border-b border-[#9BA8AB]/50 dark:border-[#11212D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#0284C7] dark:text-[#38BDF8]">
                OMNISEARCH PRODUCT OVERVIEW
              </p>
              <h1 className="mt-4 font-serif text-3xl sm:text-5xl font-medium tracking-[-0.02em] text-[#06141B] dark:text-[#CCD0CF] leading-[1.08]">
                Find what you&apos;re looking for, not just what you named it.
              </h1>
              <p className="mt-5 font-sans text-base sm:text-lg text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
                Explore how OmniSearch unifies keyword precision, semantic
                understanding, multiformat extraction, folder scoping, and
                instant file previews in a local-first desktop application.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href={WINDOWS_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-[10px] text-sm font-medium bg-[#06141B] text-[#CCD0CF] hover:bg-[#11212D] dark:bg-[#CCD0CF] dark:text-[#06141B] dark:hover:bg-white transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download for Windows</span>
                </Link>
                <Link
                  href="/workspace"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-[10px] text-sm font-medium bg-white dark:bg-[#11212D] text-[#06141B] dark:text-[#CCD0CF] border border-[#9BA8AB]/80 dark:border-[#253745] hover:bg-[#E2E7E6] dark:hover:bg-[#253745] transition-colors"
                >
                  <span>Open Interactive App Workspace</span>
                  <ArrowRight className="w-4 h-4 text-[#4A5C6A] dark:text-[#9BA8AB]" />
                </Link>
              </div>
            </div>

            {/* 7 Feature Index Cards */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {FEATURE_PILLARS.map((feat, idx) => (
                <div
                  key={feat.id}
                  className="p-5 rounded-[12px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] flex flex-col justify-between gap-3"
                >
                  <div>
                    <span className="font-mono text-xs text-[#0284C7] dark:text-[#38BDF8]">
                      0{idx + 1}
                    </span>
                    <h2 className="mt-1.5 text-base font-semibold text-[#06141B] dark:text-[#CCD0CF]">
                      {feat.title}
                    </h2>
                    <p className="mt-2 text-xs text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
                      {feat.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Product Mockup */}
            <div className="mt-12">
              <ProductMockup />
            </div>
          </div>
        </section>

        {/* Reused Product Feature Sections */}
        <SearchDemo />
        <MediaGrid />
        <FolderFilterDemo />
        <PreviewDemo />
        <LocalFirstSection />
        <DownloadCTA />
      </main>

      <Footer />
    </div>
  );
}
