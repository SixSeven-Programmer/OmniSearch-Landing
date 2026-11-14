import React from "react";
import Link from "next/link";
import { Download, Monitor } from "lucide-react";
import { WINDOWS_DOWNLOAD_URL } from "../lib/site-config";

interface PlatformCardProps {
  platform: "Windows" | "Linux" | "macOS";
  status: "Available now" | "Coming soon";
  details: string;
  primary?: boolean;
  actionHref?: string;
}

export function PlatformCard({
  platform,
  status,
  details,
  primary = false,
  actionHref = WINDOWS_DOWNLOAD_URL,
}: PlatformCardProps) {
  return (
    <div
      className={`p-6 rounded-[14px] border flex flex-col justify-between gap-6 font-sans ${
        primary
          ? "bg-[#F7F9F8] dark:bg-[#11212D] border-[#0284C7] dark:border-[#38BDF8]/70 shadow-[0_12px_32px_-12px_rgba(6,20,27,0.18)] dark:shadow-[0_12px_32px_-12px_rgba(6,20,27,0.75)]"
          : "bg-[#F4F6F6] dark:bg-[#11212D]/60 border-[#9BA8AB]/60 dark:border-[#253745]"
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <Monitor
              className={`w-4 h-4 ${
                primary
                  ? "text-[#0284C7] dark:text-[#38BDF8]"
                  : "text-[#4A5C6A] dark:text-[#9BA8AB]"
              }`}
            />
            <h3 className="font-sans text-lg font-semibold text-[#06141B] dark:text-[#CCD0CF]">
              {platform}
            </h3>
          </div>
          <span
            className={`font-mono text-xs ${
              primary
                ? "text-[#0284C7] dark:text-[#38BDF8]"
                : "text-[#4A5C6A] dark:text-[#9BA8AB]"
            }`}
          >
            {status}
          </span>
        </div>

        <p className="mt-3 font-sans text-xs sm:text-sm text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
          {details}
        </p>
      </div>

      {primary ? (
        <Link
          href={actionHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[10px] text-xs sm:text-sm font-sans font-medium bg-[#06141B] text-[#CCD0CF] hover:bg-[#11212D] dark:bg-[#CCD0CF] dark:text-[#06141B] dark:hover:bg-white transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>Download for Windows</span>
        </Link>
      ) : (
        <div className="px-4 py-2.5 rounded-[10px] text-xs font-mono text-center bg-white dark:bg-[#000000] border border-[#CCD0CF] dark:border-[#253745] text-[#4A5C6A] dark:text-[#9BA8AB]">
          In development
        </div>
      )}
    </div>
  );
}

export function DownloadCTA() {
  return (
    <section className="bg-[#EEF1F0] dark:bg-[#000000] py-24 sm:py-32 transition-colors duration-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[20px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] p-8 sm:p-12 lg:p-16">
          <div className="max-w-2xl">
            <p className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#4A5C6A] dark:text-[#9BA8AB] mb-3">
              GET OMNISEARCH
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.02em] text-[#06141B] dark:text-[#CCD0CF] leading-[1.08]">
              Meet your files differently.
            </h2>
            <p className="mt-4 font-sans text-lg text-[#253745] dark:text-[#9BA8AB]">
              Search beyond filenames with OmniSearch.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href={WINDOWS_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[10px] text-sm font-sans font-medium bg-[#06141B] text-[#CCD0CF] hover:bg-[#11212D] dark:bg-[#CCD0CF] dark:text-[#06141B] dark:hover:bg-white transition-colors whitespace-nowrap shrink-0"
              >
                <Download className="w-4 h-4 stroke-[2]" />
                <span>Download for Windows</span>
              </Link>

              <div className="flex items-center gap-2.5 font-sans text-xs text-[#4A5C6A] dark:text-[#9BA8AB]">
                <span className="text-[#06141B] dark:text-[#CCD0CF] font-medium">
                  Windows 11
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-[#06141B] dark:text-[#CCD0CF] font-medium">
                  Free
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-[#06141B] dark:text-[#CCD0CF] font-medium">
                  Local-first
                </span>
              </div>
            </div>
          </div>

          {/* Platform Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            <PlatformCard
              platform="Windows"
              status="Available now"
              details="Built for Windows 11 (64-bit). Includes local SQLite FTS5, ChromaDB vector engine, and multiformat document extractors."
              primary
            />
            <PlatformCard
              platform="Linux"
              status="Coming soon"
              details="Desktop build for modern Linux distributions (AppImage / deb) with full local-first hybrid retrieval."
            />
            <PlatformCard
              platform="macOS"
              status="Coming soon"
              details="Native Apple Silicon & Intel desktop build with local Metal-accelerated embedding support."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
