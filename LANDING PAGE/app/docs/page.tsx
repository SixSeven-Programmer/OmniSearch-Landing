"use client";

import React, { useState } from "react";
import { ChevronRight, BookOpen, Menu } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

interface DocSection {
  heading: string;
  id: string;
  body: string[];
  code?: string;
}

interface DocArticle {
  id: string;
  title: string;
  category: "Getting Started" | "Features" | "Advanced" | "Developers";
  summary: string;
  sections: DocSection[];
}

const DOC_ARTICLES: DocArticle[] = [
  // Getting Started
  {
    id: "installation",
    title: "Installation",
    category: "Getting Started",
    summary:
      "Install OmniSearch on Windows 11 or run the local backend and frontend from source.",
    sections: [
      {
        id: "system-requirements",
        heading: "System Requirements",
        body: [
          "OmniSearch is built for Windows 11 (64-bit). For running from source or development builds, ensure Python 3.11+ and Node.js 20+ are installed on your workstation.",
          "All indexing and retrieval engines bind strictly to the local loopback interface (127.0.0.1).",
        ],
      },
      {
        id: "windows-installer",
        heading: "Windows Desktop Package",
        body: [
          "Download the Windows installer from the Download page. Note: When configuring a custom release build, set WINDOWS_DOWNLOAD_URL in lib/site-config.ts to point to your signed installer binary.",
        ],
      },
      {
        id: "running-from-source",
        heading: "Running from Source",
        body: [
          "You can launch the FastAPI engine and Next.js interface directly on your workstation:",
        ],
        code: `# 1. Start the FastAPI backend on 127.0.0.1:8000
cd backend
python -m venv .venv
.\\.venv\\Scripts\\Activate.ps1
python -m pip install -e ".[dev]"
uvicorn app.main:app --host 127.0.0.1 --port 8000

# 2. Start the Next.js frontend on localhost:3000
cd frontend
npm install
npm run dev`,
      },
    ],
  },
  {
    id: "first-search",
    title: "First Search",
    category: "Getting Started",
    summary:
      "Execute your first hybrid, keyword, or semantic query across indexed local folders.",
    sections: [
      {
        id: "running-a-query",
        heading: "Running a Query",
        body: [
          "Once at least one folder has been indexed, open the Search workspace and enter either exact keywords or a natural-language description of what you are looking for.",
          "By default, OmniSearch executes in Hybrid mode—combining SQLite FTS5 BM25 lexical matches with ChromaDB semantic similarity via Reciprocal Rank Fusion.",
        ],
      },
      {
        id: "inspecting-results",
        heading: "Inspecting Results",
        body: [
          "Each result displays the filename, relative or full path, structural coordinate (such as Page 14, Slide 08, or Lines 42–89), and a highlighted snippet.",
          "Select any result card to open the read-only preview inspector.",
        ],
      },
    ],
  },
  {
    id: "adding-folders",
    title: "Adding Folders",
    category: "Getting Started",
    summary:
      "Register local directories for scanning, extraction, and incremental indexing.",
    sections: [
      {
        id: "registering-directories",
        heading: "Registering Directories",
        body: [
          "Navigate to the Library view and provide an absolute local folder path (for example, C:\\Users\\Alex\\Documents or C:\\Users\\Alex\\Projects).",
          "FolderService validates that the path exists on disk and is a directory before registering it in SQLite.",
        ],
      },
      {
        id: "excluded-directories",
        heading: "Automatic Directory Exclusions",
        body: [
          "During recursive scanning, FolderScanner automatically prunes noisy generated directories including .git, node_modules, .venv, and __pycache__, and skips symbolic links to prevent traversal loops.",
        ],
      },
    ],
  },
  {
    id: "search-basics",
    title: "Search Basics",
    category: "Getting Started",
    summary:
      "Learn how to combine exact phrases, prefix wildcards, and conceptual queries.",
    sections: [
      {
        id: "query-types",
        heading: "Choosing How to Phrase Queries",
        body: [
          "Use double quotes (\"neural networks\") when looking for an exact phrase, prefix wildcards (comput*) for token prefixes, or natural language (presentation where I explained CNN architecture) when searching by concept.",
        ],
      },
      {
        id: "filtering-results",
        heading: "Scoping by Format and Folder",
        body: [
          "Use the format filter bar (PDF, DOCX, PPTX, XLSX, Code) and folder selector below the search bar to restrict retrieval to specific file types or workspaces.",
        ],
      },
    ],
  },

  // Features
  {
    id: "keyword-search",
    title: "Keyword Search",
    category: "Features",
    summary:
      "SQLite FTS5 full-text search with weighted BM25 ranking and syntax sanitization.",
    sections: [
      {
        id: "fts5-bm25",
        heading: "Weighted BM25 Ranking",
        body: [
          "KeywordSearchEngine queries the chunks_fts virtual table (unicode61 tokenizer) using SQLite's bm25() ranking function with weights prioritizing chunk content (5.0), filename (2.0), and document title (1.0).",
        ],
      },
      {
        id: "query-parser",
        heading: "Safe Query Parsing",
        body: [
          "QueryParser preserves technical identifiers (test_case_1, k-means, v1.2.3), balances unclosed quotes, and sanitizes special FTS5 operators so arbitrary user queries never trigger SQLite syntax errors.",
        ],
      },
    ],
  },
  {
    id: "semantic-search",
    title: "Semantic Search",
    category: "Features",
    summary:
      "Local dense vector retrieval powered by Google EmbeddingGemma 2 and ChromaDB.",
    sections: [
      {
        id: "embedding-gemma",
        heading: "Local EmbeddingGemma 2 Inference",
        body: [
          "Document chunks and user queries are encoded locally using task-specific prefixes ('task: search document | query: ' and 'task: search query | query: ') with L2 unit normalization.",
        ],
      },
      {
        id: "vector-storage",
        heading: "ChromaDB Cosine Space",
        body: [
          "Embeddings are stored persistently in ChromaDB using cosine distance (similarity = 1.0 - distance) and hydrated with canonical SQLite chunk metadata at query time.",
        ],
      },
    ],
  },
  {
    id: "folder-search",
    title: "Folder Search",
    category: "Features",
    summary:
      "Scope searches to registered folders and track per-folder file and chunk metrics.",
    sections: [
      {
        id: "folder-scoping",
        heading: "Engine-Level Folder Scoping",
        body: [
          "Both SQLite FTS5 queries and ChromaDB metadata filters apply folder_id and folder_path constraints directly during candidate retrieval.",
        ],
      },
      {
        id: "cascade-cleanup",
        heading: "Unregistering & Cascade Cleanup",
        body: [
          "Removing a folder from your library cascades deletions across canonical SQLite tables, FTS5 triggers, and ChromaDB vector records.",
        ],
      },
    ],
  },
  {
    id: "file-previews",
    title: "File Previews",
    category: "Features",
    summary:
      "Inspect highlighted document chunks and exact source coordinates before opening files.",
    sections: [
      {
        id: "snippet-formatting",
        heading: "XSS-Safe Highlighted Snippets",
        body: [
          "SnippetFormatter escapes raw document text via html.escape() before injecting <mark> tags around matched terms.",
        ],
      },
      {
        id: "location-pointers",
        heading: "Structural Coordinates",
        body: [
          "Every preview displays the exact page_number, slide_number, sheet_name, row_number, or start_line/end_line preserved during chunking.",
        ],
      },
    ],
  },
  {
    id: "supported-formats",
    title: "Supported Formats",
    category: "Features",
    summary:
      "Built-in extractors and media support across office documents, code, and rich media.",
    sections: [
      {
        id: "document-extractors",
        heading: "Document & Code Extractors",
        body: [
          "Dedicated extractors handle PDF (PyMuPDF), DOCX (python-docx), PPTX (python-pptx), XLSX (openpyxl), HTML (BeautifulSoup4), CSV/TSV, Markdown, and source code with automatic charset detection.",
        ],
      },
      {
        id: "executable-blocking",
        heading: "Signature Validation & Security",
        body: [
          "FileTypeDetector inspects file headers prior to extraction and blocks disguised binary executables (MZ, ELF, Mach-O) regardless of file extension.",
        ],
      },
    ],
  },

  // Advanced
  {
    id: "indexing",
    title: "Indexing",
    category: "Advanced",
    summary:
      "Understand incremental change detection, atomic SQLite transactions, and chunking.",
    sections: [
      {
        id: "boundary-chunking",
        heading: "Boundary-Preserving Chunking",
        body: [
          "DocumentChunker targets 500 tokens per chunk with an 80-token overlap, splitting along natural sentence boundaries in prose and line boundaries in source code.",
        ],
      },
      {
        id: "incremental-sync",
        heading: "Incremental Change Detection",
        body: [
          "IndexingService compares file size, mtime, and streaming 64 KB SHA-256 digests to skip unchanged files and atomically replace chunks only when a file has been modified.",
        ],
      },
    ],
  },
  {
    id: "search-modes",
    title: "Search Modes",
    category: "Advanced",
    summary:
      "Compare Hybrid (RRF), Keyword (BM25), and Semantic (Cosine) execution modes.",
    sections: [
      {
        id: "rrf-fusion",
        heading: "Reciprocal Rank Fusion (Hybrid Mode)",
        body: [
          "Hybrid mode dispatches keyword and semantic workers concurrently via ThreadPoolExecutor and fuses their rankings using RRF(d) = sum(1 / (k + rank_m(d))) with k = 60.",
        ],
      },
      {
        id: "degraded-modes",
        heading: "Graceful Degraded Execution",
        body: [
          "Each response reports its execution mode (hybrid, keyword_only, semantic_only, or unavailable) so lexical search remains operational even while semantic embeddings are still building.",
        ],
      },
    ],
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    category: "Advanced",
    summary:
      "Diagnose backend connectivity, indexing locks, and stale chunk indicators.",
    sections: [
      {
        id: "backend-offline",
        heading: "Backend Offline Status",
        body: [
          "If the sidebar status indicator reports Backend Offline, verify that Uvicorn is running on http://127.0.0.1:8000 and check GET /api/v1/health.",
        ],
      },
      {
        id: "indexing-conflict",
        heading: "HTTP 409 Indexing in Progress",
        body: [
          "IndexingService guards against concurrent indexing jobs with a 409 INDEXING_IN_PROGRESS response. Wait for the active job to complete in the Indexing view before starting a new batch.",
        ],
      },
    ],
  },

  // Developers
  {
    id: "architecture",
    title: "Architecture",
    category: "Developers",
    summary:
      "System boundaries between the Next.js presentation layer, FastAPI core, and local stores.",
    sections: [
      {
        id: "loopback-isolation",
        heading: "Loopback Isolation & Storage",
        body: [
          "The FastAPI backend binds strictly to 127.0.0.1:8000. Persistent state is split between canonical SQLite (WAL mode, foreign key cascades, FTS5 virtual tables) and ChromaDB persistent vector storage.",
        ],
      },
    ],
  },
  {
    id: "api",
    title: "API",
    category: "Developers",
    summary:
      "REST API v1 endpoints for unified search, folder management, indexing, and telemetry.",
    sections: [
      {
        id: "core-endpoints",
        heading: "Core V1 Endpoints",
        body: [
          "All endpoints are prefixed with /api/v1 and enforce strict Pydantic request and response schemas:",
        ],
        code: `GET  /api/v1/health           # Liveness check
GET  /api/v1/system/status    # Database, FTS5, ChromaDB & lazy model telemetry
GET  /api/v1/folders          # List registered folders & aggregated metrics
POST /api/v1/folders          # Register a local directory path
POST /api/v1/indexing/run     # Trigger workspace or single-folder indexing
GET  /api/v1/indexing/status  # Poll active job progress & statistics
POST /api/v1/search/unified   # Execute keyword, semantic, or hybrid search`,
      },
    ],
  },
  {
    id: "development-setup",
    title: "Development Setup",
    category: "Developers",
    summary:
      "Run the 160-test pytest suite, Next.js linter, and local verification scripts.",
    sections: [
      {
        id: "running-tests",
        heading: "Automated Verification",
        body: [
          "Run the backend pytest suite and frontend production build checks from the repository root:",
        ],
        code: `# Run backend automated test suite
.\\backend\\.venv\\Scripts\\pytest backend\\tests -v

# Run frontend lint and build checks
cd frontend
npm run lint
npm run build`,
      },
    ],
  },
];

const CATEGORIES: DocArticle["category"][] = [
  "Getting Started",
  "Features",
  "Advanced",
  "Developers",
];

export default function DocsPage() {
  const [activeDocId, setActiveDocId] = useState<string>("installation");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const currentIndex = DOC_ARTICLES.findIndex((a) => a.id === activeDocId);
  const currentArticle = DOC_ARTICLES[currentIndex] || DOC_ARTICLES[0];
  const prevArticle = currentIndex > 0 ? DOC_ARTICLES[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < DOC_ARTICLES.length - 1
      ? DOC_ARTICLES[currentIndex + 1]
      : null;

  return (
    <div className="min-h-screen bg-[#EEF1F0] dark:bg-[#000000] text-[#06141B] dark:text-[#CCD0CF] flex flex-col transition-colors duration-200">
      <Navbar />

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Mobile Docs Drawer Toggle */}
        <div className="lg:hidden mb-6">
          <button
            type="button"
            onClick={() => setMobileNavOpen((prev) => !prev)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-[10px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] text-sm font-medium text-[#06141B] dark:text-[#CCD0CF]"
          >
            <span className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
              <span>
                {currentArticle.category} · {currentArticle.title}
              </span>
            </span>
            <Menu className="w-4 h-4 text-[#4A5C6A] dark:text-[#9BA8AB]" />
          </button>

          {mobileNavOpen && (
            <div className="mt-2 p-4 rounded-[12px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] space-y-5">
              {CATEGORIES.map((category) => (
                <div key={category} className="space-y-1.5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-[#4A5C6A] dark:text-[#9BA8AB] px-2">
                    {category}
                  </p>
                  <div className="flex flex-col space-y-1">
                    {DOC_ARTICLES.filter((a) => a.category === category).map(
                      (article) => (
                        <button
                          key={article.id}
                          type="button"
                          onClick={() => {
                            setActiveDocId(article.id);
                            setMobileNavOpen(false);
                          }}
                          className={`text-left px-3 py-2 rounded-[8px] text-xs font-medium transition-colors ${
                            activeDocId === article.id
                              ? "bg-[#E4E8E7] dark:bg-[#253745] text-[#06141B] dark:text-[#CCD0CF]"
                              : "text-[#253745] dark:text-[#9BA8AB] hover:text-[#06141B] dark:hover:text-[#CCD0CF]"
                          }`}
                        >
                          {article.title}
                        </button>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 3-Column Documentation Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Navigation Sidebar */}
          <aside
            aria-label="Documentation Navigation"
            className="hidden lg:block lg:col-span-3 sticky top-24 space-y-6 pr-4 border-r border-[#9BA8AB]/50 dark:border-[#11212D]"
          >
            {CATEGORIES.map((category) => (
              <div key={category} className="space-y-2">
                <h2 className="font-mono text-xs uppercase tracking-wider text-[#06141B] dark:text-[#CCD0CF]">
                  {category}
                </h2>
                <ul className="space-y-1">
                  {DOC_ARTICLES.filter((a) => a.category === category).map(
                    (article) => {
                      const isActive = activeDocId === article.id;
                      return (
                        <li key={article.id}>
                          <button
                            type="button"
                            onClick={() => setActiveDocId(article.id)}
                            className={`w-full text-left px-3 py-2 rounded-[8px] text-xs font-medium transition-colors flex items-center justify-between ${
                              isActive
                                ? "bg-white dark:bg-[#11212D] text-[#0284C7] dark:text-[#38BDF8] border border-[#9BA8AB]/70 dark:border-[#253745]"
                                : "text-[#253745] dark:text-[#9BA8AB] hover:text-[#06141B] dark:hover:text-[#CCD0CF] hover:bg-white/60 dark:hover:bg-[#11212D]/50"
                            }`}
                          >
                            <span>{article.title}</span>
                            {isActive && <ChevronRight className="w-3.5 h-3.5" />}
                          </button>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            ))}
          </aside>

          {/* Center Article Area */}
          <article className="lg:col-span-6 min-w-0 space-y-8">
            <div className="pb-6 border-b border-[#9BA8AB]/50 dark:border-[#11212D]">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0284C7] dark:text-[#38BDF8]">
                {currentArticle.category}
              </p>
              <h1 className="mt-2 font-serif text-3xl sm:text-4xl font-medium tracking-[-0.02em] leading-[1.08] text-[#06141B] dark:text-[#CCD0CF]">
                {currentArticle.title}
              </h1>
              <p className="mt-3 font-sans text-base text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
                {currentArticle.summary}
              </p>
            </div>

            <div className="space-y-8">
              {currentArticle.sections.map((sec) => (
                <section key={sec.id} id={sec.id} className="space-y-3">
                  <h2 className="text-xl font-semibold text-[#06141B] dark:text-[#CCD0CF]">
                    {sec.heading}
                  </h2>
                  {sec.body.map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-sm sm:text-base text-[#253745] dark:text-[#9BA8AB] leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {sec.code && (
                    <pre className="mt-4 p-4 rounded-[12px] bg-[#06141B] dark:bg-[#11212D] border border-[#253745] font-mono text-xs text-[#CCD0CF] overflow-x-auto leading-relaxed">
                      <code>{sec.code}</code>
                    </pre>
                  )}
                </section>
              ))}
            </div>

            {/* Previous / Next Article Navigation */}
            <div className="pt-8 border-t border-[#9BA8AB]/50 dark:border-[#11212D] grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevArticle ? (
                <button
                  type="button"
                  onClick={() => setActiveDocId(prevArticle.id)}
                  className="p-4 rounded-[12px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] hover:border-[#4A5C6A] text-left transition-colors"
                >
                  <p className="font-mono text-[11px] text-[#4A5C6A] dark:text-[#9BA8AB]">
                    Previous
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#06141B] dark:text-[#CCD0CF]">
                    {prevArticle.title}
                  </p>
                </button>
              ) : (
                <div />
              )}

              {nextArticle && (
                <button
                  type="button"
                  onClick={() => setActiveDocId(nextArticle.id)}
                  className="p-4 rounded-[12px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] hover:border-[#4A5C6A] text-right transition-colors"
                >
                  <p className="font-mono text-[11px] text-[#4A5C6A] dark:text-[#9BA8AB]">
                    Next
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#06141B] dark:text-[#CCD0CF]">
                    {nextArticle.title}
                  </p>
                </button>
              )}
            </div>
          </article>

          {/* Right Table of Contents (Desktop) */}
          <aside
            aria-label="On this page"
            className="hidden lg:block lg:col-span-3 sticky top-24 pl-4 border-l border-[#9BA8AB]/50 dark:border-[#11212D] space-y-3"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-[#06141B] dark:text-[#CCD0CF]">
              On this page
            </p>
            <ul className="space-y-2 text-xs">
              {currentArticle.sections.map((sec) => (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    className="text-[#253745] dark:text-[#9BA8AB] hover:text-[#06141B] dark:hover:text-[#CCD0CF] transition-colors"
                  >
                    {sec.heading}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
