import React from "react";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { DownloadCTA } from "../../components/DownloadCTA";
import { WINDOWS_DOWNLOAD_URL } from "../../lib/site-config";

const PHILOSOPHY_PILLARS = [
  {
    number: "01",
    title: "Local-first",
    description:
      "Your files and indices belong on your computer. OmniSearch runs its extraction, SQLite FTS5 indexing, and ChromaDB vector retrieval directly on your machine over loopback 127.0.0.1.",
  },
  {
    number: "02",
    title: "Intelligent",
    description:
      "Search should not fail simply because a filename was abbreviated months ago. By pairing exact BM25 keyword matching with local EmbeddingGemma semantic vectors, OmniSearch retrieves files by both literal phrasing and conceptual meaning.",
  },
  {
    number: "03",
    title: "Multiformat",
    description:
      "Real work spans PDFs, Word documents, PowerPoint slide decks, Excel spreadsheets, Markdown notes, source code, images, audio, and video. OmniSearch treats all of them as first-class citizens in a single search stream.",
  },
  {
    number: "04",
    title: "Practical",
    description:
      "Built for everyday speed and clarity: deterministic Reciprocal Rank Fusion, exact page/slide/line coordinates, instant read-only previews, and incremental SHA-256 change detection.",
  },
  {
    number: "05",
    title: "Open to evolution",
    description:
      "Engineered with modular boundaries—from pluggable format extractors and token counters to decoupled FastAPI services—so new document formats and local embedding models integrate cleanly.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#EEF1F0] dark:bg-[#000000] text-[#06141B] dark:text-[#CCD0CF] flex flex-col transition-colors duration-200">
      <Navbar />

      <main className="flex-1">
        {/* Hero Story */}
        <section className="py-20 sm:py-28 border-b border-[#9BA8AB]/50 dark:border-[#11212D]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#0284C7] dark:text-[#38BDF8]">
              ABOUT OMNISEARCH
            </p>
            <h1 className="mt-4 font-serif text-3xl sm:text-5xl font-medium tracking-[-0.02em] text-[#06141B] dark:text-[#CCD0CF] leading-[1.08] [text-wrap:balance]">
              Search should understand what you&apos;re looking for.
            </h1>

            <div className="mt-8 space-y-6 font-sans text-base sm:text-lg text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
              <p className="text-[#06141B] dark:text-[#CCD0CF] font-medium">
                Modern computers can store thousands of files, but finding one
                often depends on remembering its name or location. OmniSearch
                was created to make personal file search more contextual, useful
                and intelligent.
              </p>
              <p>
                Traditional operating system search tools excel when you know
                the exact filename or directory path, but struggle when you only
                remember a concept discussed on slide 14 of a lecture deck, a
                table buried inside a spreadsheet, or a function implementation
                inside a project repository.
              </p>
              <p>
                OmniSearch bridges that gap by combining the precision of
                full-text keyword search with the contextual understanding of
                local semantic embeddings—without requiring you to upload your
                personal or professional files to a cloud service.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[10px] text-sm font-medium bg-white dark:bg-[#11212D] text-[#06141B] dark:text-[#CCD0CF] border border-[#9BA8AB]/80 dark:border-[#253745] hover:bg-[#E2E7E6] dark:hover:bg-[#253745] transition-colors"
              >
                <span>Explore the architecture</span>
                <ArrowRight className="w-4 h-4 text-[#4A5C6A] dark:text-[#9BA8AB]" />
              </Link>
              <Link
                href={WINDOWS_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[10px] text-sm font-medium bg-[#06141B] text-[#CCD0CF] hover:bg-[#11212D] dark:bg-[#CCD0CF] dark:text-[#06141B] dark:hover:bg-white transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download for Windows</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Product Philosophy Pillars */}
        <section className="py-20 sm:py-28 border-b border-[#9BA8AB]/50 dark:border-[#11212D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#4A5C6A] dark:text-[#9BA8AB]">
                PRODUCT PHILOSOPHY
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-medium tracking-[-0.02em] leading-[1.08] text-[#06141B] dark:text-[#CCD0CF]">
                Five principles guiding OmniSearch.
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PHILOSOPHY_PILLARS.map((pillar) => (
                <div
                  key={pillar.number}
                  className="p-6 rounded-[14px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] flex flex-col justify-between gap-4"
                >
                  <div>
                    <span className="font-mono text-xs text-[#0284C7] dark:text-[#38BDF8]">
                      {pillar.number}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-[#06141B] dark:text-[#CCD0CF]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <DownloadCTA />
      </main>

      <Footer />
    </div>
  );
}
