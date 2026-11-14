import React from "react";
import { SectionHeading } from "./SectionHeading";

const TECH_STACK_LAYERS = [
  {
    layer: "Presentation & Desktop Shell",
    items: [
      {
        name: "Next.js",
        role: "React 19 App Router interface & local state orchestration",
      },
      {
        name: "Electron",
        role: "Desktop window frame, OS integration & process lifecycle",
      },
    ],
  },
  {
    layer: "Application Core & API Engine",
    items: [
      {
        name: "Python",
        role: "Core ingestion, normalization, chunking & ranking pipelines",
      },
      {
        name: "FastAPI",
        role: "Strongly-typed REST API bound to loopback 127.0.0.1:8000",
      },
    ],
  },
  {
    layer: "Storage & Retrieval Engines",
    items: [
      {
        name: "SQLite",
        role: "Canonical WAL-mode database for files, chunks & jobs",
      },
      {
        name: "SQLite FTS5",
        role: "Lexical full-text index with weighted BM25 ranking",
      },
      {
        name: "Semantic Search",
        role: "Conceptual natural-language retrieval pipeline",
      },
      {
        name: "EmbeddingGemma",
        role: "Local dense vector inference with Matryoshka truncation",
      },
      {
        name: "ChromaDB",
        role: "Persistent local vector store in cosine similarity space",
      },
    ],
  },
];

const CORE_CONCEPTS = [
  {
    title: "Hybrid retrieval",
    description:
      "Combines SQLite FTS5 BM25 lexical rankings and ChromaDB vector similarity using Reciprocal Rank Fusion (RRF).",
  },
  {
    title: "Persistent indexing",
    description:
      "Tracks file size, modification timestamps, and streaming 64 KB SHA-256 hashes so unchanged files are never re-parsed.",
  },
  {
    title: "Semantic embeddings",
    description:
      "Encodes 500-token boundary-preserving chunks locally with EmbeddingGemma 2 task prefixes and L2 normalization.",
  },
  {
    title: "Multiformat extraction",
    description:
      "Fault-isolated extractors parse PDFs, Word docs, PowerPoint slides, Excel sheets, CSVs, HTML, code, and media.",
  },
  {
    title: "Local-first architecture",
    description:
      "Operates entirely on your machine over loopback 127.0.0.1 with zero external cloud dependencies.",
  },
];

export function TechnologySection() {
  return (
    <section className="bg-[#EEF1F0] dark:bg-[#000000] py-20 sm:py-28 border-b border-[#9BA8AB]/50 dark:border-[#11212D] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="SYSTEM ARCHITECTURE"
          title="Under the hood."
          description="A local-first architecture designed for fast, persistent and intelligent file search."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Structured Stack Architecture Visualization */}
          <div className="lg:col-span-7 space-y-4">
            {TECH_STACK_LAYERS.map((group) => (
              <div
                key={group.layer}
                className="p-5 sm:p-6 rounded-[14px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] space-y-4"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8]">
                  {group.layer}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="p-3.5 rounded-[10px] bg-[#F7F9F8] dark:bg-[#000000] border border-[#CCD0CF] dark:border-[#253745]"
                    >
                      <p className="font-mono text-sm font-semibold text-[#06141B] dark:text-[#CCD0CF]">
                        {tech.name}
                      </p>
                      <p className="mt-1 text-xs text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
                        {tech.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: 5 Architectural Pillars */}
          <div className="lg:col-span-5 rounded-[14px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] p-6 space-y-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#06141B] dark:text-[#CCD0CF] pb-3 border-b border-[#CCD0CF] dark:border-[#253745]">
              Core Engineering Principles
            </h3>

            <div className="space-y-4">
              {CORE_CONCEPTS.map((concept, idx) => (
                <div
                  key={concept.title}
                  className="pb-4 last:pb-0 border-b last:border-b-0 border-[#CCD0CF] dark:border-[#253745]/70"
                >
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-mono text-xs text-[#0284C7] dark:text-[#38BDF8]">
                      0{idx + 1}.
                    </span>
                    <h4 className="text-sm font-semibold text-[#06141B] dark:text-[#CCD0CF]">
                      {concept.title}
                    </h4>
                  </div>
                  <p className="mt-1.5 text-xs text-[#253745] dark:text-[#9BA8AB] leading-relaxed pl-6">
                    {concept.description}
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
