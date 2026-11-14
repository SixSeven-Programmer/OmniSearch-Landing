import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ArchitectureFlow } from "../../components/ArchitectureFlow";
import { PreviewDemo } from "../../components/PreviewDemo";
import { DownloadCTA } from "../../components/DownloadCTA";

const PIPELINE_STAGES = [
  {
    number: "01",
    title: "Indexing",
    subtitle: "Recursive Folder Scanning & Incremental Change Detection",
    description:
      "When you add a folder to OmniSearch, FolderScanner traverses the directory tree while pruning ignored system directories (.git, node_modules, .venv, __pycache__) and skipping symbolic links to prevent traversal loops.",
    details: [
      "Streaming 64 KB SHA-256 hashing verifies file integrity without loading huge files into RAM.",
      "FileTypeDetector inspects magic byte signatures and blocks disguised executables (MZ, ELF, Mach-O).",
      "Unchanged files (matching size, modification timestamp, and SHA-256 digest) are skipped on subsequent runs.",
    ],
  },
  {
    number: "02",
    title: "Content extraction",
    subtitle: "Fault-Isolated Multiformat Parsing & Boundary Chunking",
    description:
      "ExtractorRegistry dispatches each file to its specialized parser (PyMuPDF for PDF, python-docx for Word, python-pptx for PowerPoint, openpyxl for Excel, BeautifulSoup4 for HTML, and charset-normalized readers for code and CSV).",
    details: [
      "TextNormalizer applies Unicode NFKC normalization while preserving code indentation and table structure.",
      "DocumentChunker segments content into ~500-token chunks with 80-token overlap along sentence and line boundaries.",
      "Every chunk retains exact source coordinates: page_number, slide_number, sheet_name, row_number, or start_line/end_line.",
    ],
  },
  {
    number: "03",
    title: "Keyword retrieval",
    subtitle: "SQLite FTS5 Virtual Table & Weighted BM25 Scoring",
    description:
      "QueryParser sanitizes user input into safe FTS5 MATCH expressions—preserving exact quoted phrases, technical identifiers (v1.2.3, k-means, test_case_1), prefix wildcards, and boolean operators.",
    details: [
      "BM25 scoring weights chunk content (5.0), filename (2.0), and document title (1.0).",
      "Window-function deduplication (ROW_NUMBER() OVER PARTITION BY file_id) prevents a single long document from dominating results.",
      "SQLite triggers keep the FTS5 index automatically synchronized on every chunk insert, update, or cascade delete.",
    ],
  },
  {
    number: "04",
    title: "Semantic retrieval",
    subtitle: "Local EmbeddingGemma 2 Inference & ChromaDB Vector Store",
    description:
      "Natural-language queries and document chunks are encoded locally using Google EmbeddingGemma 2 with task-specific prompts ('task: search query | query: ' and 'task: search document | query: ').",
    details: [
      "Supports Matryoshka dimension truncation with explicit L2 unit vector normalization.",
      "Vectors are persisted in ChromaDB using cosine distance (similarity = 1.0 - distance).",
      "EmbeddingModelManager loads model weights lazily on demand so system health checks never consume unnecessary memory.",
    ],
  },
  {
    number: "05",
    title: "Ranking",
    subtitle: "Reciprocal Rank Fusion (RRF) & Deterministic Tie-Breaking",
    description:
      "Because lexical BM25 scores and vector cosine similarities follow different distributions, OmniSearch fuses candidate lists using Reciprocal Rank Fusion rather than brittle raw-score averaging.",
    details: [
      "Formula: RRF(d) = sum(1 / (k + rank_m(d))) with smoothing constant k = 60.",
      "3-tier tie-breaking: (1) RRF score descending, (2) best individual engine rank ascending, (3) canonical chunk_id ascending.",
      "Graceful degraded modes (hybrid, keyword_only, semantic_only) ensure search remains available at all times.",
    ],
  },
  {
    number: "06",
    title: "Preview",
    subtitle: "XSS-Safe Highlighted Snippets & Structural Inspection",
    description:
      "SnippetFormatter escapes raw document text before injecting <mark> highlight tags, paired with structural location metadata so you can inspect the exact page, slide, sheet, or code block immediately.",
    details: [
      "Displays matching terms, RRF score, BM25 rank, and semantic cosine similarity side by side.",
      "Flags stale chunks if a file encountered a subsequent re-indexing error.",
      "Provides read-only inspection so your original files are never modified.",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#EEF1F0] dark:bg-[#000000] text-[#06141B] dark:text-[#CCD0CF] flex flex-col transition-colors duration-200">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-20 sm:py-24 border-b border-[#9BA8AB]/50 dark:border-[#11212D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#0284C7] dark:text-[#38BDF8]">
                TECHNICAL ARCHITECTURE
              </p>
              <h1 className="mt-4 font-serif text-3xl sm:text-5xl font-medium tracking-[-0.02em] text-[#06141B] dark:text-[#CCD0CF] leading-[1.08]">
                How OmniSearch works from disk to discovery.
              </h1>
              <p className="mt-5 font-sans text-base sm:text-lg text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
                A six-stage local pipeline combining fault-isolated document
                ingestion, boundary-preserving chunking, SQLite FTS5 lexical
                search, EmbeddingGemma vector retrieval, and Reciprocal Rank
                Fusion.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] text-sm font-medium bg-white dark:bg-[#11212D] text-[#06141B] dark:text-[#CCD0CF] border border-[#9BA8AB]/80 dark:border-[#253745] hover:bg-[#E2E7E6] dark:hover:bg-[#253745] transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                  <span>Read Technical Docs</span>
                </Link>
                <Link
                  href="/product"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] text-sm font-medium text-[#253745] dark:text-[#9BA8AB] hover:text-[#06141B] dark:hover:text-[#CCD0CF] transition-colors"
                >
                  <span>Explore Product Features</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Six Detailed Pipeline Stages */}
        <section className="py-20 sm:py-28 border-b border-[#9BA8AB]/50 dark:border-[#11212D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {PIPELINE_STAGES.map((stage) => (
              <div
                key={stage.number}
                className="p-6 sm:p-8 rounded-[16px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                <div className="lg:col-span-5 space-y-2">
                  <span className="font-mono text-xs text-[#0284C7] dark:text-[#38BDF8]">
                    STAGE {stage.number}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-semibold text-[#06141B] dark:text-[#CCD0CF]">
                    {stage.title}
                  </h2>
                  <p className="font-mono text-xs text-[#4A5C6A] dark:text-[#9BA8AB]">
                    {stage.subtitle}
                  </p>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <p className="text-sm sm:text-base text-[#06141B] dark:text-[#CCD0CF] leading-relaxed">
                    {stage.description}
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-[#CCD0CF] dark:border-[#253745]">
                    {stage.details.map((detail) => (
                      <li
                        key={detail}
                        className="text-xs sm:text-sm text-[#253745] dark:text-[#9BA8AB] flex items-start gap-2.5"
                      >
                        <span className="font-mono text-[#0284C7] dark:text-[#38BDF8] mt-0.5">
                          ·
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hybrid Search Diagram & Interactive Preview */}
        <ArchitectureFlow />
        <PreviewDemo />
        <DownloadCTA />
      </main>

      <Footer />
    </div>
  );
}
