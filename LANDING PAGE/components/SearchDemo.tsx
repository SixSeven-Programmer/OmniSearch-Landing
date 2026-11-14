"use client";

import React, { useState } from "react";
import {
  Search,
  Presentation,
  FileText,
  FileCode,
  Check,
  CornerDownLeft,
} from "lucide-react";

const MEANING_EXAMPLES = [
  {
    query: "presentation where I explained CNN architecture",
    explanation:
      "Notice none of the matched files are named 'presentation'. OmniSearch understands the conceptual link between your query and the slide contents.",
    matches: [
      {
        filename: "AI_Lecture_08_Final.pptx",
        location: "Slide 12 · Speaker Notes",
        reason:
          "Contains diagram & notes on 2D convolutional filter hierarchies",
        similarity: "0.93",
        icon: Presentation,
      },
      {
        filename: "vision_backprop_summary.pdf",
        location: "Page 06 · Section 2.1",
        reason: "Explains receptive fields, stride, and spatial pooling layers",
        similarity: "0.89",
        icon: FileText,
      },
      {
        filename: "convnet_blocks.py",
        location: "Lines 14–68",
        reason: "PyTorch Conv2d + BatchNorm2d module implementation",
        similarity: "0.85",
        icon: FileCode,
      },
    ],
  },
  {
    query: "spreadsheet with Q3 server latency benchmarks",
    explanation:
      "Even when the file is saved under a generic run number, OmniSearch matches column headers, sheet names, and cell context.",
    matches: [
      {
        filename: "perf_audit_october_export.xlsx",
        location: "Sheet 'p99_metrics' · Rows 1–42",
        reason:
          "Contains p50/p95/p99 response times across regional endpoints",
        similarity: "0.92",
        icon: FileText,
      },
      {
        filename: "infra_postmortem_notes.md",
        location: "Lines 30–75",
        reason: "Summarizes Q3 database query bottlenecks and WAL tuning",
        similarity: "0.87",
        icon: FileText,
      },
    ],
  },
];

export function SearchDemo() {
  const [activeExample, setActiveExample] = useState(0);
  const current = MEANING_EXAMPLES[activeExample];

  return (
    <section className="bg-[#EEF1F0] dark:bg-[#000000] py-20 sm:py-28 border-b border-[#9BA8AB]/50 dark:border-[#11212D] transition-colors duration-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#4A5C6A] dark:text-[#9BA8AB] mb-3">
                SEARCH BY MEANING
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-[-0.02em] text-[#06141B] dark:text-[#CCD0CF] leading-[1.08]">
                Search by what you mean.
              </h2>
              <p className="mt-4 font-sans text-base sm:text-lg text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
                You don&apos;t always remember a filename. You remember what you
                were looking for.
              </p>
            </div>

            {/* Equation Block */}
            <div className="p-5 rounded-[14px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="font-sans text-[#06141B] dark:text-[#CCD0CF] font-medium">
                  Keyword search
                </span>
                <span className="font-sans text-xs text-[#4A5C6A] dark:text-[#9BA8AB]">
                  Exact terms &amp; identifiers
                </span>
              </div>
              <div className="font-mono text-xs text-[#0284C7] dark:text-[#38BDF8]">
                +
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-sans text-[#06141B] dark:text-[#CCD0CF] font-medium">
                  Semantic search
                </span>
                <span className="font-sans text-xs text-[#4A5C6A] dark:text-[#9BA8AB]">
                  Conceptual meaning
                </span>
              </div>
              <div className="pt-3 border-t border-[#CCD0CF] dark:border-[#253745] flex items-center justify-between">
                <span className="font-mono text-xs text-[#0284C7] dark:text-[#38BDF8]">
                  =
                </span>
                <span className="font-sans text-sm font-semibold text-[#06141B] dark:text-[#CCD0CF]">
                  OmniSearch Hybrid Retrieval
                </span>
              </div>
            </div>

            {/* Example Suggestion Pills (Neutral Sans-Serif) */}
            <div className="space-y-2.5">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4A5C6A] dark:text-[#9BA8AB]">
                Suggestion Queries
              </p>
              <div className="flex flex-col gap-2">
                {MEANING_EXAMPLES.map((ex, idx) => (
                  <button
                    key={ex.query}
                    type="button"
                    onClick={() => setActiveExample(idx)}
                    className={`text-left px-4 py-2.5 rounded-full border text-xs font-sans font-medium transition-colors flex items-center justify-between gap-2 ${
                      activeExample === idx
                        ? "bg-white dark:bg-[#11212D] border-[#4A5C6A] text-[#06141B] dark:text-[#CCD0CF]"
                        : "bg-[#F4F6F6] dark:bg-[#000000] border-[#9BA8AB]/60 dark:border-[#253745] text-[#253745] dark:text-[#9BA8AB] hover:text-[#06141B] dark:hover:text-[#CCD0CF]"
                    }`}
                  >
                    <span className="truncate">&ldquo;{ex.query}&rdquo;</span>
                    {activeExample === idx && (
                      <Check className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Demonstration Surface */}
          <div className="lg:col-span-7 rounded-[16px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] p-5 sm:p-7 space-y-5">
            {/* Search Box (Neutral Sans-Serif + Crisp Monospace Keycap Badges) */}
            <div className="p-3.5 rounded-[10px] bg-[#F4F6F6] dark:bg-[#000000] border border-[#9BA8AB] dark:border-[#4A5C6A] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <Search className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                <span className="font-sans text-sm sm:text-base text-[#06141B] dark:text-[#CCD0CF] truncate">
                  {current.query}
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 shrink-0">
                <kbd className="inline-flex items-center px-2 py-0.5 rounded-[6px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/80 dark:border-[#253745] font-mono text-[11px] font-medium text-[#4A5C6A] dark:text-[#9BA8AB] shadow-[0_1px_0_0_rgba(6,20,27,0.12)]">
                  Ctrl K
                </kbd>
                <kbd className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[6px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/80 dark:border-[#253745] font-mono text-[11px] font-medium text-[#4A5C6A] dark:text-[#9BA8AB] shadow-[0_1px_0_0_rgba(6,20,27,0.12)]">
                  <CornerDownLeft className="w-3 h-3" /> Enter
                </kbd>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
              {current.explanation}
            </p>

            {/* Matched Files Even When Filenames Differ */}
            <div className="space-y-3">
              {current.matches.map((match) => {
                const Icon = match.icon;
                return (
                  <div
                    key={match.filename}
                    className="p-4 rounded-[12px] bg-[#F7F9F8] dark:bg-[#000000]/75 border border-[#CCD0CF] dark:border-[#253745] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                        <span className="font-sans text-sm font-medium text-[#06141B] dark:text-[#CCD0CF] truncate">
                          {match.filename}
                        </span>
                        <span className="font-mono text-[11px] text-[#4A5C6A] dark:text-[#9BA8AB]">
                          · {match.location}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-[#253745] dark:text-[#9BA8AB] pl-6">
                        {match.reason}
                      </p>
                    </div>

                    <div className="pl-6 sm:pl-0 shrink-0 font-mono text-xs text-[#0284C7] dark:text-[#38BDF8] tabular-nums">
                      similarity {match.similarity}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
