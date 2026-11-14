import React from "react";
import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const AVAILABLE_NOW = [
  "Windows",
  "Keyword Search",
  "Semantic Search",
  "Multiformat Indexing",
  "Media Support",
  "File Previews",
  "Folder Filtering",
  "Local-first Search",
];

const COMING_SOON = ["Linux", "macOS"];

const FUTURE_ITEMS = [
  "Native Electron system tray & global hotkey launcher",
  "Real-time filesystem event watcher for automatic background delta indexing",
  "Local OCR text extraction for scanned PDFs and image captures",
];

export function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="bg-[#EEF1F0] dark:bg-[#000000] py-20 sm:py-28 border-b border-[#9BA8AB]/50 dark:border-[#11212D] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="PRODUCT ROADMAP"
          title="Current capabilities and platform direction."
          description="A transparent view of what is shipping today and what is actively in development."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Available Now */}
          <div className="p-6 rounded-[14px] bg-white dark:bg-[#11212D] border border-[#0284C7]/60 dark:border-[#38BDF8]/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#CCD0CF] dark:border-[#253745]">
                <h3 className="text-base font-semibold text-[#06141B] dark:text-[#CCD0CF]">
                  Available now
                </h3>
                <span className="font-mono text-xs text-[#0284C7] dark:text-[#38BDF8]">
                  Shipping
                </span>
              </div>

              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {AVAILABLE_NOW.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-[#06141B] dark:text-[#CCD0CF]"
                  >
                    <Check className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="p-6 rounded-[14px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#CCD0CF] dark:border-[#253745]">
                <h3 className="text-base font-semibold text-[#06141B] dark:text-[#CCD0CF]">
                  Coming soon
                </h3>
                <span className="font-mono text-xs text-[#4A5C6A] dark:text-[#9BA8AB]">
                  Cross-Platform
                </span>
              </div>

              <ul className="mt-5 space-y-3">
                {COMING_SOON.map((platform) => (
                  <li
                    key={platform}
                    className="p-3.5 rounded-[10px] bg-[#F7F9F8] dark:bg-[#000000] border border-[#CCD0CF] dark:border-[#253745] flex items-center justify-between"
                  >
                    <span className="text-sm font-medium text-[#06141B] dark:text-[#CCD0CF]">
                      {platform}
                    </span>
                    <span className="font-mono text-xs text-[#4A5C6A] dark:text-[#9BA8AB]">
                      Coming soon
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-xs text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
              The Python FastAPI engine and SQLite/ChromaDB storage layer are
              already cross-platform compatible; native desktop packaging for
              Linux and macOS is underway.
            </p>
          </div>

          {/* Future */}
          <div className="p-6 rounded-[14px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#CCD0CF] dark:border-[#253745]">
                <h3 className="text-base font-semibold text-[#06141B] dark:text-[#CCD0CF]">
                  Future
                </h3>
                <span className="font-mono text-xs text-[#4A5C6A] dark:text-[#9BA8AB]">
                  Planned
                </span>
              </div>

              <ul className="mt-5 space-y-3.5">
                {FUTURE_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-[#253745] dark:text-[#9BA8AB] leading-relaxed pb-3.5 last:pb-0 border-b last:border-b-0 border-[#CCD0CF] dark:border-[#253745]/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
