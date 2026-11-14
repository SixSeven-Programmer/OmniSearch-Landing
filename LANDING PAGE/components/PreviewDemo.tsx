"use client";

import React, { useState } from "react";
import {
  FileText,
  Image as ImageIcon,
  FileVideo,
  FileAudio,
  FileCode,
  Play,
  Volume2,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type PreviewTabId = "pdf" | "image" | "video" | "audio" | "code";

const PREVIEW_TABS: {
  id: PreviewTabId;
  label: string;
  filename: string;
  path: string;
  coordinate: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    id: "pdf",
    label: "PDF preview",
    filename: "Distributed_Systems_Lecture_Notes.pdf",
    path: "C:\\Users\\College\\CS512\\Distributed_Systems_Lecture_Notes.pdf",
    coordinate: "Page 22 of 68 · Chunk #14",
    icon: FileText,
  },
  {
    id: "image",
    label: "Image preview",
    filename: "indexing_pipeline_whiteboard.png",
    path: "C:\\Users\\Projects\\OmniSearch\\docs\\indexing_pipeline_whiteboard.png",
    coordinate: "2560 × 1440 px · PNG · 1.8 MB",
    icon: ImageIcon,
  },
  {
    id: "video",
    label: "Video preview",
    filename: "hybrid_ranker_walkthrough.mp4",
    path: "C:\\Users\\Videos\\Captures\\hybrid_ranker_walkthrough.mp4",
    coordinate: "01:42 / 04:15 · 1080p MP4",
    icon: FileVideo,
  },
  {
    id: "audio",
    label: "Audio player",
    filename: "thesis_advisor_meeting_notes.m4a",
    path: "C:\\Users\\Research\\Audio\\thesis_advisor_meeting_notes.m4a",
    coordinate: "06:18 / 19:40 · 48kHz AAC",
    icon: FileAudio,
  },
  {
    id: "code",
    label: "Code preview",
    filename: "rrf.py",
    path: "C:\\Users\\Projects\\OmniSearch\\backend\\app\\search\\rrf.py",
    coordinate: "Lines 28–56 · Python 3.11",
    icon: FileCode,
  },
];

export function PreviewDemo() {
  const [activeTab, setActiveTab] = useState<PreviewTabId>("pdf");
  const current =
    PREVIEW_TABS.find((t) => t.id === activeTab) || PREVIEW_TABS[0];

  return (
    <section className="bg-[#EEF1F0] dark:bg-[#000000] py-20 sm:py-28 border-b border-[#9BA8AB]/50 dark:border-[#11212D] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="INSTANT INSPECTION"
          title="Find it before you open it."
          description="Search, inspect and decide without constantly opening files one by one."
        />

        {/* Interactive Preview Switcher & Inspector Window */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Format Selector */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-2">
            <div className="space-y-2">
              {PREVIEW_TABS.map((tab) => {
                const Icon = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left p-4 rounded-[12px] border transition-colors flex items-center justify-between gap-3 ${
                      isSelected
                        ? "bg-white dark:bg-[#11212D] border-[#0284C7] dark:border-[#38BDF8] text-[#06141B] dark:text-[#CCD0CF]"
                        : "bg-white/60 dark:bg-[#11212D]/40 border-[#9BA8AB]/60 dark:border-[#253745] text-[#253745] dark:text-[#9BA8AB] hover:text-[#06141B] dark:hover:text-[#CCD0CF] hover:border-[#4A5C6A]"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Icon
                        className={`w-4 h-4 shrink-0 ${
                          isSelected
                            ? "text-[#0284C7] dark:text-[#38BDF8]"
                            : "text-[#4A5C6A] dark:text-[#9BA8AB]"
                        }`}
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">
                          {tab.label}
                        </p>
                        <p className="font-mono text-[11px] text-[#4A5C6A] dark:text-[#9BA8AB] truncate">
                          {tab.filename}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-[12px] bg-white/80 dark:bg-[#11212D]/50 border border-[#9BA8AB]/60 dark:border-[#253745] text-xs text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
              OmniSearch preserves structural coordinates during chunking so
              previews jump directly to the matching page, slide, row, or line
              range.
            </div>
          </div>

          {/* Right OmniSearch Inspector Surface */}
          <div className="lg:col-span-8 rounded-[16px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] overflow-hidden flex flex-col justify-between">
            {/* Inspector Header */}
            <div className="px-5 py-4 bg-[#E4E8E7] dark:bg-[#000000] border-b border-[#9BA8AB]/60 dark:border-[#253745] flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-[#06141B] dark:text-[#CCD0CF]">
                  {current.filename}
                </h3>
                <p className="font-mono text-[11px] text-[#4A5C6A] dark:text-[#9BA8AB] mt-0.5">
                  {current.path}
                </p>
              </div>
              <span className="font-mono text-xs text-[#0284C7] dark:text-[#38BDF8]">
                {current.coordinate}
              </span>
            </div>

            {/* Dynamic Preview Canvas */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center">
              {activeTab === "pdf" && (
                <div className="rounded-[12px] bg-[#F7F9F8] dark:bg-[#000000] border border-[#CCD0CF] dark:border-[#253745] p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#4A5C6A] dark:text-[#9BA8AB] pb-3 border-b border-[#CCD0CF] dark:border-[#11212D]">
                    <span>
                      Section 4.3 — Consensus &amp; State Machine Replication
                    </span>
                    <span>Page 22</span>
                  </div>
                  <p className="text-sm text-[#06141B] dark:text-[#CCD0CF] leading-relaxed">
                    In the Raft consensus algorithm, leader election and log
                    replication guarantee safety under asynchronous network
                    partitions provided a strict majority of{" "}
                    <mark className="bg-[#0284C7]/15 dark:bg-[#38BDF8]/20 text-[#06141B] dark:text-[#CCD0CF] px-1.5 py-0.5 rounded-[4px]">
                      quorum nodes
                    </mark>{" "}
                    commit each log entry before application to the local state
                    machine.
                  </p>
                  <p className="text-xs text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
                    Figure 4.2 demonstrates log term monotonicity across
                    follower append-entries RPC heartbeats.
                  </p>
                </div>
              )}

              {activeTab === "image" && (
                <div className="rounded-[12px] bg-[#06141B] border border-[#253745] p-6 flex flex-col items-center justify-center space-y-5">
                  {/* Architectural SVG schematic preview */}
                  <svg
                    viewBox="0 0 560 200"
                    className="w-full max-w-lg h-auto"
                    aria-label="Indexing pipeline diagram preview"
                  >
                    <rect
                      x="10"
                      y="60"
                      width="110"
                      height="70"
                      rx="8"
                      fill="#11212D"
                      stroke="#4A5C6A"
                    />
                    <text
                      x="65"
                      y="92"
                      textAnchor="middle"
                      fill="#CCD0CF"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      FolderScanner
                    </text>
                    <text
                      x="65"
                      y="110"
                      textAnchor="middle"
                      fill="#9BA8AB"
                      fontSize="9"
                      fontFamily="monospace"
                    >
                      SHA-256 Stream
                    </text>

                    <path
                      d="M120 95 L165 95"
                      stroke="#38BDF8"
                      strokeWidth="1.5"
                    />

                    <rect
                      x="165"
                      y="60"
                      width="115"
                      height="70"
                      rx="8"
                      fill="#11212D"
                      stroke="#4A5C6A"
                    />
                    <text
                      x="222"
                      y="92"
                      textAnchor="middle"
                      fill="#CCD0CF"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      Chunker (500t)
                    </text>
                    <text
                      x="222"
                      y="110"
                      textAnchor="middle"
                      fill="#9BA8AB"
                      fontSize="9"
                      fontFamily="monospace"
                    >
                      80t Overlap
                    </text>

                    <path
                      d="M280 95 L325 95"
                      stroke="#38BDF8"
                      strokeWidth="1.5"
                    />

                    <rect
                      x="325"
                      y="30"
                      width="215"
                      height="55"
                      rx="8"
                      fill="#11212D"
                      stroke="#38BDF8"
                    />
                    <text
                      x="432"
                      y="55"
                      textAnchor="middle"
                      fill="#CCD0CF"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      SQLite FTS5 (BM25)
                    </text>
                    <text
                      x="432"
                      y="72"
                      textAnchor="middle"
                      fill="#9BA8AB"
                      fontSize="9"
                      fontFamily="monospace"
                    >
                      Lexical Index
                    </text>

                    <rect
                      x="325"
                      y="105"
                      width="215"
                      height="55"
                      rx="8"
                      fill="#11212D"
                      stroke="#38BDF8"
                    />
                    <text
                      x="432"
                      y="130"
                      textAnchor="middle"
                      fill="#CCD0CF"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      ChromaDB + EmbeddingGemma
                    </text>
                    <text
                      x="432"
                      y="147"
                      textAnchor="middle"
                      fill="#9BA8AB"
                      fontSize="9"
                      fontFamily="monospace"
                    >
                      Dense Vector Store
                    </text>
                  </svg>
                  <p className="font-mono text-xs text-[#9BA8AB]">
                    Direct local image rendering · Color profile sRGB · Zero
                    external viewer required
                  </p>
                </div>
              )}

              {activeTab === "video" && (
                <div className="rounded-[12px] bg-[#F7F9F8] dark:bg-[#000000] border border-[#CCD0CF] dark:border-[#253745] p-6 space-y-5">
                  <div className="aspect-[21/9] rounded-[8px] bg-[#11212D] border border-[#253745] flex flex-col items-center justify-center gap-2">
                    <div className="w-11 h-11 rounded-full bg-[#06141B] border border-[#4A5C6A] flex items-center justify-center">
                      <Play className="w-4 h-4 text-[#38BDF8] translate-x-0.5" />
                    </div>
                    <span className="font-mono text-xs text-[#CCD0CF]">
                      Timestamp match at 01:42 — Reciprocal Rank Fusion demo
                    </span>
                  </div>
                  {/* Scrubber Bar */}
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-full rounded-full bg-[#CCD0CF] dark:bg-[#11212D] overflow-hidden">
                      <div className="h-full w-[42%] bg-[#0284C7] dark:bg-[#38BDF8]" />
                    </div>
                    <div className="flex justify-between font-mono text-[11px] text-[#4A5C6A] dark:text-[#9BA8AB] tabular-nums">
                      <span>01:42</span>
                      <span>Matched segment: 01:35 – 02:10</span>
                      <span>04:15</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "audio" && (
                <div className="rounded-[12px] bg-[#F7F9F8] dark:bg-[#000000] border border-[#CCD0CF] dark:border-[#253745] p-6 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-[#11212D] border border-[#9BA8AB] dark:border-[#4A5C6A] flex items-center justify-center shrink-0">
                      <Volume2 className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-[#06141B] dark:text-[#CCD0CF]">
                        thesis_advisor_meeting_notes.m4a
                      </p>
                      <p className="font-mono text-xs text-[#4A5C6A] dark:text-[#9BA8AB]">
                        Matched transcript segment at 06:18
                      </p>
                    </div>
                  </div>

                  {/* Waveform Bars */}
                  <div
                    className="flex items-center gap-1 h-12 px-2"
                    aria-hidden="true"
                  >
                    {[
                      28, 45, 62, 35, 80, 95, 70, 50, 88, 64, 40, 75, 92, 84,
                      60, 48, 72, 90, 55, 38, 66, 82, 58, 42, 30, 50, 68, 44,
                    ].map((height, i) => (
                      <div
                        key={i}
                        style={{ height: `${height}%` }}
                        className={`flex-1 rounded-full ${
                          i >= 6 && i <= 16
                            ? "bg-[#0284C7] dark:bg-[#38BDF8]"
                            : "bg-[#9BA8AB]/60 dark:bg-[#253745]"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-xs text-[#253745] dark:text-[#9BA8AB] font-mono">
                    &ldquo;...make sure the evaluation compares pure BM25 against
                    Reciprocal Rank Fusion with k=60...&rdquo;
                  </p>
                </div>
              )}

              {activeTab === "code" && (
                <div className="rounded-[12px] bg-[#06141B] border border-[#253745] p-5 font-mono text-xs leading-relaxed overflow-x-auto">
                  <div className="text-[#9BA8AB] pb-2 mb-3 border-b border-[#11212D] flex justify-between">
                    <span>backend/app/search/rrf.py</span>
                    <span>Lines 28–39</span>
                  </div>
                  <pre className="text-[#CCD0CF] space-y-1">
                    <code>{`def compute_rrf_score(ranks: list[int], k: int = 60) -> float:
    """Compute Reciprocal Rank Fusion score across retrieval engines."""
    return sum(1.0 / (k + rank) for rank in ranks if rank > 0)

# Deterministic 3-tier tie-breaking:
# 1. RRF score (descending)
# 2. Best individual engine rank (ascending)
# 3. Canonical SQLite chunk_id (ascending)`}</code>
                  </pre>
                </div>
              )}
            </div>

            {/* Bottom Summary Bar */}
            <div className="px-5 py-3.5 bg-[#E4E8E7] dark:bg-[#000000] border-t border-[#9BA8AB]/60 dark:border-[#253745] flex items-center justify-between text-xs font-mono text-[#253745] dark:text-[#9BA8AB]">
              <span>Search → Preview → Decide.</span>
              <span>Read-only local inspection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
