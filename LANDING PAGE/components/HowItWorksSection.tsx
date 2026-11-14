import React from "react";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const STEPS = [
  {
    number: "01",
    title: "Index",
    description:
      "OmniSearch scans selected folders and extracts searchable content.",
    technicalNote: "Streaming SHA-256 change detection & format extractors",
  },
  {
    number: "02",
    title: "Understand",
    description:
      "Content is processed for keyword and semantic retrieval.",
    technicalNote: "500-token boundary chunking, FTS5 & EmbeddingGemma vectors",
  },
  {
    number: "03",
    title: "Search",
    description: "Search using keywords or natural language.",
    technicalNote: "Concurrent lexical BM25 + dense vector similarity",
  },
  {
    number: "04",
    title: "Discover",
    description:
      "Explore ranked results and preview files before opening them.",
    technicalNote: "Reciprocal Rank Fusion (RRF) & exact location previews",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-[#EEF1F0] dark:bg-[#000000] py-20 sm:py-28 border-b border-[#9BA8AB]/50 dark:border-[#11212D] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="From files to findings."
          description="A streamlined four-stage pipeline that turns scattered local folders into an instantaneously searchable knowledge base."
        />

        {/* Visual Flow Ribbon */}
        <div className="mt-10 p-4 rounded-[12px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] flex flex-wrap items-center justify-center sm:justify-between gap-3 font-mono text-xs text-[#06141B] dark:text-[#CCD0CF]">
          <span>FILES</span>
          <ArrowRight className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
          <span>INDEX</span>
          <ArrowRight className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
          <span>UNDERSTAND</span>
          <ArrowRight className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
          <span>SEARCH</span>
          <ArrowRight className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
          <span className="text-[#0284C7] dark:text-[#38BDF8]">DISCOVER</span>
        </div>

        {/* Four Step Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-[14px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] flex flex-col justify-between gap-6"
            >
              <div>
                <span className="font-mono text-xs text-[#0284C7] dark:text-[#38BDF8]">
                  {step.number} — {step.title.toUpperCase()}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-[#06141B] dark:text-[#CCD0CF]">
                  {step.number}. {step.title}
                </h3>
                <p className="mt-2.5 text-sm text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#CCD0CF] dark:border-[#253745] font-mono text-[11px] text-[#4A5C6A] dark:text-[#9BA8AB]">
                {step.technicalNote}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
