import React from "react";
import { ArrowDown } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function ArchitectureFlow() {
  return (
    <section className="bg-[#EEF1F0] dark:bg-[#000000] py-20 sm:py-28 border-b border-[#9BA8AB]/50 dark:border-[#11212D] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="HYBRID RETRIEVAL ENGINE"
          title="Precision meets understanding."
          description="OmniSearch combines traditional keyword retrieval with semantic understanding to make search both precise and contextual."
        />

        {/* Hybrid Search Flow Diagram */}
        <div className="mt-12 rounded-[16px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] p-6 sm:p-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Stage 1: Query */}
            <div className="w-full max-w-md rounded-[10px] bg-[#F4F6F6] dark:bg-[#000000] border border-[#9BA8AB] dark:border-[#4A5C6A] px-5 py-3.5 text-center">
              <p className="font-mono text-[11px] uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8]">
                INPUT QUERY
              </p>
              <p className="mt-1 text-sm font-medium text-[#06141B] dark:text-[#CCD0CF]">
                Keywords, exact phrases, identifiers, or natural language
              </p>
            </div>

            <div className="my-3 text-[#4A5C6A]" aria-hidden="true">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* Stage 2: Parallel Engines */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Keyword Matching */}
              <div className="rounded-[12px] bg-[#F7F9F8] dark:bg-[#000000] border border-[#CCD0CF] dark:border-[#253745] p-5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-medium text-[#06141B] dark:text-[#CCD0CF]">
                    KEYWORD MATCHING
                  </span>
                  <span className="font-mono text-[11px] text-[#4A5C6A] dark:text-[#9BA8AB]">
                    SQLite FTS5 · BM25
                  </span>
                </div>
                <p className="text-xs text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
                  Matches exact phrases, boolean operators, technical
                  identifiers, and prefix wildcards across weighted chunk
                  content, filenames, and titles.
                </p>
              </div>

              {/* Semantic Understanding */}
              <div className="rounded-[12px] bg-[#F7F9F8] dark:bg-[#000000] border border-[#CCD0CF] dark:border-[#253745] p-5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-medium text-[#06141B] dark:text-[#CCD0CF]">
                    SEMANTIC UNDERSTANDING
                  </span>
                  <span className="font-mono text-[11px] text-[#0284C7] dark:text-[#38BDF8]">
                    EmbeddingGemma 2 · ChromaDB
                  </span>
                </div>
                <p className="text-xs text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
                  Encodes queries and document chunks into normalized dense
                  vectors to retrieve conceptually related content even when
                  terminology differs.
                </p>
              </div>
            </div>

            <div className="my-3 text-[#4A5C6A]" aria-hidden="true">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* Stage 3: Reciprocal Rank Fusion */}
            <div className="w-full max-w-2xl rounded-[12px] bg-[#F4F6F6] dark:bg-[#000000] border border-[#9BA8AB] dark:border-[#4A5C6A]/80 p-5 text-center space-y-2">
              <p className="font-mono text-xs uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8]">
                RECIPROCAL RANK FUSION (RRF)
              </p>
              <p className="text-xs sm:text-sm text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
                Combines lexical and semantic rank positions into a unified,
                deterministic ordering without brittle raw-score calibration.
              </p>
            </div>

            <div className="my-3 text-[#4A5C6A]" aria-hidden="true">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* Stage 4: Ranked Results */}
            <div className="w-full max-w-md rounded-[10px] bg-[#06141B] dark:bg-[#253745] border border-[#06141B] dark:border-[#4A5C6A] px-5 py-3.5 text-center">
              <p className="font-mono text-xs uppercase tracking-wider text-[#CCD0CF]">
                RANKED RESULTS + LOCATION POINTERS
              </p>
              <p className="mt-1 text-xs text-[#9BA8AB]">
                Highlighted snippets · Exact page, slide, sheet, or line numbers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
