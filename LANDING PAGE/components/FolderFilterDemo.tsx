"use client";

import React, { useState } from "react";
import { Folder, Search, ArrowRight, FileText } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const FOLDERS = [
  {
    id: "All Files",
    path: "All Indexed Workspace Folders",
    count: 6,
  },
  {
    id: "College",
    path: "C:\\Users\\Alex\\College",
    count: 2,
  },
  {
    id: "Projects",
    path: "C:\\Users\\Alex\\Projects",
    count: 2,
  },
  {
    id: "Research",
    path: "C:\\Users\\Alex\\Research",
    count: 1,
  },
  {
    id: "Documents",
    path: "C:\\Users\\Alex\\Documents",
    count: 1,
  },
  {
    id: "Downloads",
    path: "C:\\Users\\Alex\\Downloads",
    count: 1,
  },
] as const;

type FolderScope = (typeof FOLDERS)[number]["id"];

const SCOPED_RESULTS: {
  folder: Exclude<FolderScope, "All Files">;
  filename: string;
  subpath: string;
  snippet: string;
  location: string;
}[] = [
  {
    folder: "College",
    filename: "CS482_Neural_Networks_Midterm_Review.pdf",
    subpath: "C:\\Users\\Alex\\College\\CS482\\Notes\\",
    snippet: "Derivation of backpropagation gradients and cross-entropy loss.",
    location: "Page 07",
  },
  {
    folder: "College",
    filename: "Operating_Systems_Virtual_Memory.pptx",
    subpath: "C:\\Users\\Alex\\College\\CS410\\Slides\\",
    snippet: "Page table translation lookaside buffer (TLB) hit ratio analysis.",
    location: "Slide 19",
  },
  {
    folder: "Projects",
    filename: "hybrid_search.py",
    subpath: "C:\\Users\\Alex\\Projects\\OmniSearch\\backend\\app\\search\\",
    snippet:
      "Concurrent ThreadPoolExecutor dispatch for keyword and semantic search.",
    location: "Lines 44–92",
  },
  {
    folder: "Projects",
    filename: "ARCHITECTURE.md",
    subpath: "C:\\Users\\Alex\\Projects\\OmniSearch\\docs\\",
    snippet:
      "Reciprocal Rank Fusion combines FTS5 BM25 and ChromaDB cosine similarity.",
    location: "Lines 110–145",
  },
  {
    folder: "Research",
    filename: "EmbeddingGemma_Matryoshka_Evaluation.xlsx",
    subpath: "C:\\Users\\Alex\\Research\\Benchmarks\\",
    snippet:
      "Recall@10 comparison across 768d, 512d, and 256d truncated embeddings.",
    location: "Sheet 'Recall_Metrics'",
  },
  {
    folder: "Documents",
    filename: "System_Design_Notes_2026.docx",
    subpath: "C:\\Users\\Alex\\Documents\\Architecture\\",
    snippet:
      "SQLite WAL journal mode configuration for concurrent desktop reads.",
    location: "Section 2.4",
  },
  {
    folder: "Downloads",
    filename: "sqlite_fts5_reference_manual.pdf",
    subpath: "C:\\Users\\Alex\\Downloads\\",
    snippet:
      "Auxiliary bm25() ranking function with custom column weight parameters.",
    location: "Page 14",
  },
];

export function FolderFilterDemo() {
  const [selectedFolder, setSelectedFolder] =
    useState<FolderScope>("All Files");

  const filtered =
    selectedFolder === "All Files"
      ? SCOPED_RESULTS.slice(0, 4)
      : SCOPED_RESULTS.filter((r) => r.folder === selectedFolder);

  return (
    <section className="bg-[#EEF1F0] dark:bg-[#000000] py-20 sm:py-28 border-b border-[#9BA8AB]/50 dark:border-[#11212D] transition-colors duration-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative + Flow */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="SCOPED DISCOVERY"
              title="Search where it matters."
              description="Narrow your search to the folders that matter."
            />

            {/* Query -> Folder Filter -> Relevant Results Flow */}
            <div className="p-5 rounded-[14px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] space-y-3">
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-sans font-medium text-[#06141B] dark:text-[#CCD0CF]">
                <span className="px-2.5 py-1 rounded-[6px] bg-[#F4F6F6] dark:bg-[#000000] border border-[#9BA8AB]/70 dark:border-[#253745]">
                  Query
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                <span className="px-2.5 py-1 rounded-[6px] bg-[#F4F6F6] dark:bg-[#000000] border border-[#0284C7]/60 dark:border-[#38BDF8]/50 text-[#0284C7] dark:text-[#38BDF8]">
                  Folder filter ({selectedFolder})
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                <span className="px-2.5 py-1 rounded-[6px] bg-[#06141B] dark:bg-[#253745] text-[#CCD0CF]">
                  Relevant results
                </span>
              </div>
              <p className="font-sans text-xs text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
                Both SQLite FTS5 queries and ChromaDB metadata filters scope
                retrieval at the engine level before ranking, ensuring zero
                cross-folder noise when you know the workspace context.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Folder Selector + Scoped Results */}
          <div className="lg:col-span-7 rounded-[16px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] p-5 sm:p-7 space-y-5">
            {/* Simulated Search Input (Neutral Sans-Serif + Monospace Keycap) */}
            <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-[10px] bg-[#F4F6F6] dark:bg-[#000000] border border-[#9BA8AB] dark:border-[#253745]">
              <div className="flex items-center gap-2.5">
                <Search className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                <span className="font-sans text-sm text-[#06141B] dark:text-[#CCD0CF]">
                  architecture ranking evaluation
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs text-[#4A5C6A] dark:text-[#9BA8AB]">
                  Scope: {selectedFolder}
                </span>
                <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-[6px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/80 dark:border-[#253745] font-mono text-[11px] font-medium text-[#4A5C6A] dark:text-[#9BA8AB]">
                  Ctrl K
                </kbd>
              </div>
            </div>

            {/* Folder Selector Bar (Neutral Sans-Serif) */}
            <div className="flex flex-wrap items-center gap-2">
              {FOLDERS.map((folder) => {
                const isActive = selectedFolder === folder.id;
                return (
                  <button
                    key={folder.id}
                    type="button"
                    onClick={() => setSelectedFolder(folder.id)}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-sans font-medium transition-colors border ${
                      isActive
                        ? "bg-[#E4E8E7] dark:bg-[#253745] border-[#0284C7] dark:border-[#38BDF8] text-[#06141B] dark:text-[#CCD0CF]"
                        : "bg-[#F4F6F6] dark:bg-[#000000] border-[#9BA8AB]/60 dark:border-[#253745] text-[#253745] dark:text-[#9BA8AB] hover:text-[#06141B] dark:hover:text-[#CCD0CF]"
                    }`}
                  >
                    <Folder
                      className={`w-3.5 h-3.5 ${
                        isActive
                          ? "text-[#0284C7] dark:text-[#38BDF8]"
                          : "text-[#4A5C6A] dark:text-[#9BA8AB]"
                      }`}
                    />
                    <span>{folder.id}</span>
                  </button>
                );
              })}
            </div>

            {/* Scoped Results List */}
            <div className="space-y-2.5 pt-2">
              {filtered.map((item) => (
                <div
                  key={item.filename}
                  className="p-4 rounded-[12px] bg-[#F7F9F8] dark:bg-[#000000]/80 border border-[#CCD0CF] dark:border-[#253745] space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <FileText className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                      <span className="font-sans text-sm font-medium text-[#06141B] dark:text-[#CCD0CF] truncate">
                        {item.filename}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-[#4A5C6A] dark:text-[#9BA8AB] shrink-0">
                      {item.location}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#253745] dark:text-[#9BA8AB]">
                    {item.snippet}
                  </p>
                  <p className="font-mono text-[10px] text-[#4A5C6A]/90 dark:text-[#9BA8AB]/80 truncate">
                    {item.subpath}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
