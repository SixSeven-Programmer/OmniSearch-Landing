"use client";

import React, { useState } from "react";
import {
  FileText,
  Presentation,
  FileSpreadsheet,
  FileCode,
  Image as ImageIcon,
  FileAudio,
  FileVideo,
  FileCheck,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const SUPPORTED_MEDIA = [
  {
    id: "documents",
    label: "Documents",
    extensions: ".docx · .txt · .md · .html",
    pointer: "Paragraph & section boundaries",
    sampleFile: "System_Architecture_Specification.docx",
    sampleSnippet:
      "Section 4.1: Local loopback binding ensures the API server listens exclusively on 127.0.0.1.",
    icon: FileText,
  },
  {
    id: "pdfs",
    label: "PDFs",
    extensions: ".pdf (PyMuPDF extraction)",
    pointer: "Exact page number coordinates",
    sampleFile: "Attention_Mechanisms_Survey.pdf",
    sampleSnippet:
      "Page 09: Scaled dot-product attention computes alignment weights across key-value representations.",
    icon: FileCheck,
  },
  {
    id: "presentations",
    label: "Presentations",
    extensions: ".pptx (Slide & shape parsing)",
    pointer: "Slide number & title metadata",
    sampleFile: "Q4_Engineering_Roadmap.pptx",
    sampleSnippet:
      "Slide 14: Incremental folder reconciliation reduces re-indexing time for unchanged files via SHA-256.",
    icon: Presentation,
  },
  {
    id: "spreadsheets",
    label: "Spreadsheets",
    extensions: ".xlsx · .csv · .tsv",
    pointer: "Sheet name & row index",
    sampleFile: "benchmark_latency_results.xlsx",
    sampleSnippet:
      "Sheet 'FTS5_vs_Hybrid' · Row 18: Mean query execution 18.4ms across 12,500 indexed chunks.",
    icon: FileSpreadsheet,
  },
  {
    id: "code",
    label: "Code",
    extensions: ".py · .ts · .tsx · .js · .rs · .go · .sql",
    pointer: "Start & end line numbers",
    sampleFile: "hybrid_search.py",
    sampleSnippet:
      "Lines 62–98: def fuse_rankings(keyword_hits, semantic_hits, rrf_k=60) -> list[RankedChunk]:",
    icon: FileCode,
  },
  {
    id: "images",
    label: "Images",
    extensions: ".png · .jpg · .webp · .svg",
    pointer: "Dimensions, path & visual metadata",
    sampleFile: "whiteboard_schema_diagram.png",
    sampleSnippet:
      "Indexed asset · 2560×1440 PNG · C:\\Users\\Projects\\OmniSearch\\diagrams\\",
    icon: ImageIcon,
  },
  {
    id: "audio",
    label: "Audio",
    extensions: ".mp3 · .wav · .m4a · .flac",
    pointer: "Duration, transcript & metadata",
    sampleFile: "research_sync_notes_04.m4a",
    sampleSnippet:
      "Audio recording · 14:22 · Discussion on Matryoshka embedding dimensions and L2 normalization.",
    icon: FileAudio,
  },
  {
    id: "video",
    label: "Video",
    extensions: ".mp4 · .mkv · .mov · .webm",
    pointer: "Video container & timeline metadata",
    sampleFile: "prototype_walkthrough_capture.mp4",
    sampleSnippet:
      "Video capture · 1920×1080 · Demonstration of instant file preview and folder filtering.",
    icon: FileVideo,
  },
];

export function MediaGrid() {
  const [selectedId, setSelectedId] = useState<string>("all");

  const visibleItems =
    selectedId === "all"
      ? SUPPORTED_MEDIA.slice(0, 5)
      : SUPPORTED_MEDIA.filter((m) => m.id === selectedId);

  return (
    <section className="bg-[#EEF1F0] dark:bg-[#000000] py-20 sm:py-28 border-b border-[#9BA8AB]/50 dark:border-[#11212D] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="UNIFIED MULTIFORMAT INDEXING"
          title="One search. Every kind of file."
          description="Search across documents, presentations, spreadsheets, source code, and media from a single unified interface."
        />

        {/* 8 File-Type Cards Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {SUPPORTED_MEDIA.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  setSelectedId((prev) => (prev === item.id ? "all" : item.id))
                }
                className={`p-4 rounded-[12px] border text-left transition-colors flex flex-col justify-between gap-4 ${
                  isSelected
                    ? "bg-[#E4E8E7] dark:bg-[#253745] border-[#0284C7] dark:border-[#38BDF8] text-[#06141B] dark:text-[#CCD0CF]"
                    : "bg-white dark:bg-[#11212D] border-[#9BA8AB]/70 dark:border-[#253745] text-[#06141B] dark:text-[#CCD0CF] hover:border-[#4A5C6A]"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isSelected
                      ? "text-[#0284C7] dark:text-[#38BDF8]"
                      : "text-[#4A5C6A] dark:text-[#9BA8AB]"
                  }`}
                />
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="mt-1 font-mono text-[10px] text-[#4A5C6A] dark:text-[#9BA8AB] truncate">
                    {item.extensions}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Realistic Unified Result Stream */}
        <div className="mt-8 rounded-[16px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#CCD0CF] dark:border-[#253745]">
            <div className="font-mono text-xs text-[#06141B] dark:text-[#CCD0CF]">
              Unified Result Stream{" "}
              <span className="text-[#4A5C6A] dark:text-[#9BA8AB]">
                ({selectedId === "all" ? "Showing mixed formats" : selectedId})
              </span>
            </div>
            {selectedId !== "all" && (
              <button
                type="button"
                onClick={() => setSelectedId("all")}
                className="font-mono text-xs text-[#0284C7] dark:text-[#38BDF8] hover:underline"
              >
                Show all formats
              </button>
            )}
          </div>

          <div className="mt-4 divide-y divide-[#CCD0CF] dark:divide-[#253745]/70">
            {visibleItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-[8px] bg-[#F4F6F6] dark:bg-[#000000] border border-[#9BA8AB]/60 dark:border-[#253745] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-[#06141B] dark:text-[#CCD0CF] truncate">
                          {item.sampleFile}
                        </span>
                        <span className="font-mono text-[11px] text-[#4A5C6A] dark:text-[#9BA8AB]">
                          · {item.label}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-[#253745] dark:text-[#9BA8AB] truncate">
                        {item.sampleSnippet}
                      </p>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] text-[#4A5C6A] dark:text-[#9BA8AB] shrink-0 pl-11 sm:pl-0">
                    {item.pointer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
