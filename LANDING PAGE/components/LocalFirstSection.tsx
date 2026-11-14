import React from "react";
import { HardDrive, Cpu, Database, ShieldCheck } from "lucide-react";

export function LocalFirstSection() {
  return (
    <section className="bg-[#E4E8E7] dark:bg-[#000000] py-24 sm:py-32 border-b border-[#9BA8AB]/60 dark:border-[#11212D] transition-colors duration-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <p className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#0284C7] dark:text-[#38BDF8]">
              LOCAL-FIRST ARCHITECTURE
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.02em] text-[#06141B] dark:text-[#CCD0CF] leading-[1.08] [text-wrap:balance]">
              Your files. Your machine. Your search.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
              OmniSearch is designed as a local-first application, keeping the
              core indexing and search experience on your computer.
            </p>

            {/* Accurate Local-First Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-[12px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745]">
                <HardDrive className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8] mb-2" />
                <p className="font-sans text-sm font-medium text-[#06141B] dark:text-[#CCD0CF]">
                  Local-first
                </p>
                <p className="mt-1 font-sans text-xs text-[#253745] dark:text-[#9BA8AB]">
                  SQLite and ChromaDB indices live directly on your local disk.
                </p>
              </div>

              <div className="p-4 rounded-[12px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745]">
                <Cpu className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8] mb-2" />
                <p className="font-sans text-sm font-medium text-[#06141B] dark:text-[#CCD0CF]">
                  On-device search
                </p>
                <p className="mt-1 font-sans text-xs text-[#253745] dark:text-[#9BA8AB]">
                  Keyword FTS5 and EmbeddingGemma run locally via loopback
                  127.0.0.1.
                </p>
              </div>

              <div className="p-4 rounded-[12px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745]">
                <ShieldCheck className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8] mb-2" />
                <p className="font-sans text-sm font-medium text-[#06141B] dark:text-[#CCD0CF]">
                  Your selected files
                </p>
                <p className="mt-1 font-sans text-xs text-[#253745] dark:text-[#9BA8AB]">
                  Only folders you explicitly register are scanned—read-only,
                  without modifying source files.
                </p>
              </div>
            </div>
          </div>

          {/* Right Architectural Boundary Diagram */}
          <div className="lg:col-span-6">
            <div className="rounded-[20px] bg-white dark:bg-[#11212D] border-2 border-[#9BA8AB] dark:border-[#253745] p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#CCD0CF] dark:border-[#253745]">
                <span className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-[#06141B] dark:text-[#CCD0CF]">
                  YOUR COMPUTER (127.0.0.1 LOOPBACK BOUNDARY)
                </span>
                <span className="font-mono text-[11px] text-[#0284C7] dark:text-[#38BDF8]">
                  Offline-Ready
                </span>
              </div>

              {/* Inner OmniSearch Box */}
              <div className="rounded-[14px] bg-[#F4F6F6] dark:bg-[#000000] border border-[#9BA8AB] dark:border-[#4A5C6A] p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#06141B] dark:text-[#CCD0CF]">
                    OMNISEARCH ENGINE
                  </span>
                  <Database className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-[10px] bg-white dark:bg-[#11212D] border border-[#CCD0CF] dark:border-[#253745]">
                    <p className="font-sans text-xs font-medium text-[#0284C7] dark:text-[#38BDF8]">
                      Index → Understand
                    </p>
                    <p className="mt-1.5 font-sans text-xs text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
                      Multi-format text extraction, boundary-preserving
                      chunking, and local vector generation.
                    </p>
                  </div>

                  <div className="p-4 rounded-[10px] bg-white dark:bg-[#11212D] border border-[#CCD0CF] dark:border-[#253745]">
                    <p className="font-sans text-xs font-medium text-[#0284C7] dark:text-[#38BDF8]">
                      Search → Preview
                    </p>
                    <p className="mt-1.5 font-sans text-xs text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
                      Hybrid BM25 + Cosine ranking and instant document chunk
                      inspection.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#CCD0CF] dark:border-[#11212D] flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-[#4A5C6A] dark:text-[#9BA8AB]">
                  <span>Canonical Store: SQLite WAL + FTS5</span>
                  <span>Vector Store: Local ChromaDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
