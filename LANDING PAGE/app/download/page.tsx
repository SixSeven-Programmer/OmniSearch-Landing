"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Download, Monitor, Check, Terminal, Info } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { WINDOWS_DOWNLOAD_URL, SITE_CONFIG } from "../../lib/site-config";

export default function DownloadPage() {
  const [showBuildNotice, setShowBuildNotice] = useState(false);

  const hasInstallerUrl = WINDOWS_DOWNLOAD_URL.trim().length > 0;

  return (
    <div className="min-h-screen bg-[#EEF1F0] dark:bg-[#000000] text-[#06141B] dark:text-[#CCD0CF] flex flex-col transition-colors duration-200">
      <Navbar />

      <main className="flex-1 py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Primary Windows Download Hero Card */}
          <div className="rounded-[20px] bg-white dark:bg-[#11212D] border border-[#0284C7]/60 dark:border-[#38BDF8]/60 p-8 sm:p-12 shadow-[0_20px_50px_-15px_rgba(6,20,27,0.16)] dark:shadow-[0_20px_50px_-15px_rgba(6,20,27,0.85)]">
            <div className="flex flex-wrap items-center gap-3 font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#4A5C6A] dark:text-[#9BA8AB]">
              <span className="text-[#0284C7] dark:text-[#38BDF8]">
                Windows 11
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-[#06141B] dark:text-[#CCD0CF]">
                Available now
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-[#06141B] dark:text-[#CCD0CF]">
                Free
              </span>
            </div>

            <h1 className="mt-4 font-serif text-3xl sm:text-5xl font-medium tracking-[-0.02em] text-[#06141B] dark:text-[#CCD0CF] leading-[1.08]">
              Download OmniSearch for Windows.
            </h1>

            <p className="mt-4 font-sans text-base sm:text-lg text-[#253745] dark:text-[#9BA8AB] max-w-2xl leading-relaxed">
              Local-first intelligent search across documents, presentations,
              spreadsheets, code, and media—powered by SQLite FTS5 and
              EmbeddingGemma.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              {hasInstallerUrl ? (
                <a
                  href={WINDOWS_DOWNLOAD_URL}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[10px] text-sm font-medium bg-[#06141B] text-[#CCD0CF] hover:bg-[#11212D] dark:bg-[#CCD0CF] dark:text-[#06141B] dark:hover:bg-white transition-colors"
                >
                  <Download className="w-4 h-4 stroke-[2]" />
                  <span>Download for Windows</span>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowBuildNotice(true)}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[10px] text-sm font-medium bg-[#06141B] text-[#CCD0CF] hover:bg-[#11212D] dark:bg-[#CCD0CF] dark:text-[#06141B] dark:hover:bg-white transition-colors"
                >
                  <Download className="w-4 h-4 stroke-[2]" />
                  <span>Download for Windows</span>
                </button>
              )}

              <Link
                href="/docs"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-[10px] text-sm font-medium bg-[#F4F6F6] dark:bg-[#000000] text-[#06141B] dark:text-[#CCD0CF] border border-[#9BA8AB]/80 dark:border-[#253745] hover:bg-[#E2E7E6] dark:hover:bg-[#253745] transition-colors"
              >
                <Terminal className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                <span>View Installation &amp; Source Guide</span>
              </Link>
            </div>

            {/* Honest Installer URL Configuration Status when WINDOWS_DOWNLOAD_URL is empty */}
            {showBuildNotice && !hasInstallerUrl && (
              <div className="mt-6 p-4 rounded-[12px] bg-[#F4F6F6] dark:bg-[#000000] border border-[#0284C7]/50 dark:border-[#38BDF8]/50 flex items-start gap-3">
                <Info className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                <div className="text-xs text-[#253745] dark:text-[#9BA8AB] space-y-1.5 leading-relaxed">
                  <p className="text-[#06141B] dark:text-[#CCD0CF] font-medium">
                    Installer binary URL not yet configured in{" "}
                    <code className="font-mono text-[#0284C7] dark:text-[#38BDF8]">
                      WINDOWS_DOWNLOAD_URL
                    </code>
                  </p>
                  <p>
                    Set{" "}
                    <code className="font-mono text-[#06141B] dark:text-[#CCD0CF]">
                      WINDOWS_DOWNLOAD_URL
                    </code>{" "}
                    in{" "}
                    <code className="font-mono text-[#06141B] dark:text-[#CCD0CF]">
                      lib/site-config.ts
                    </code>{" "}
                    to link your packaged Windows installer, or launch the live{" "}
                    <Link
                      href="/workspace"
                      className="text-[#0284C7] dark:text-[#38BDF8] underline"
                    >
                      OmniSearch Desktop UI
                    </Link>{" "}
                    directly in your browser.
                  </p>
                </div>
              </div>
            )}

            {/* System Requirements Grid */}
            <div className="mt-10 pt-8 border-t border-[#CCD0CF] dark:border-[#253745] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <p className="font-mono text-[#4A5C6A] dark:text-[#9BA8AB]">
                  Operating System
                </p>
                <p className="mt-1 text-[#06141B] dark:text-[#CCD0CF] font-medium">
                  {SITE_CONFIG.windowsRequirements.os}
                </p>
              </div>
              <div>
                <p className="font-mono text-[#4A5C6A] dark:text-[#9BA8AB]">
                  Memory
                </p>
                <p className="mt-1 text-[#06141B] dark:text-[#CCD0CF] font-medium">
                  {SITE_CONFIG.windowsRequirements.memory}
                </p>
              </div>
              <div>
                <p className="font-mono text-[#4A5C6A] dark:text-[#9BA8AB]">
                  Disk Space
                </p>
                <p className="mt-1 text-[#06141B] dark:text-[#CCD0CF] font-medium">
                  {SITE_CONFIG.windowsRequirements.storage}
                </p>
              </div>
              <div>
                <p className="font-mono text-[#4A5C6A] dark:text-[#9BA8AB]">
                  Network Architecture
                </p>
                <p className="mt-1 text-[#06141B] dark:text-[#CCD0CF] font-medium">
                  {SITE_CONFIG.windowsRequirements.network}
                </p>
              </div>
            </div>
          </div>

          {/* Other Platforms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-[14px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] flex flex-col justify-between gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Monitor className="w-4 h-4 text-[#4A5C6A] dark:text-[#9BA8AB]" />
                  <h2 className="text-lg font-semibold text-[#06141B] dark:text-[#CCD0CF]">
                    Linux
                  </h2>
                </div>
                <span className="font-mono text-xs text-[#4A5C6A] dark:text-[#9BA8AB]">
                  Coming soon
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
                Native desktop packaging for Linux distributions is planned.
                Developers can run the Python FastAPI backend and Next.js
                frontend from source today.
              </p>
            </div>

            <div className="p-6 rounded-[14px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] flex flex-col justify-between gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Monitor className="w-4 h-4 text-[#4A5C6A] dark:text-[#9BA8AB]" />
                  <h2 className="text-lg font-semibold text-[#06141B] dark:text-[#CCD0CF]">
                    macOS
                  </h2>
                </div>
                <span className="font-mono text-xs text-[#4A5C6A] dark:text-[#9BA8AB]">
                  Coming soon
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
                Native macOS packaging for Apple Silicon and Intel Macs is
                planned for an upcoming release.
              </p>
            </div>
          </div>

          {/* What's Included Checklist */}
          <div className="p-6 sm:p-8 rounded-[16px] bg-white/80 dark:bg-[#11212D]/60 border border-[#9BA8AB]/70 dark:border-[#253745]">
            <h2 className="text-base font-semibold text-[#06141B] dark:text-[#CCD0CF]">
              Included in the Windows release
            </h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs sm:text-sm text-[#06141B] dark:text-[#CCD0CF]">
              {[
                "SQLite FTS5 lexical BM25 engine",
                "Local EmbeddingGemma 2 inference",
                "ChromaDB persistent vector store",
                "Reciprocal Rank Fusion (RRF)",
                "PDF, DOCX, PPTX, XLSX & code extractors",
                "Read-only instant file previews",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
