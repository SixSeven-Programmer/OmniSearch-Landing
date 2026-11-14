"use client";

import React, { useState } from "react";
import { Play, Sparkles, CheckCircle2 } from "lucide-react";
import { PRODUCT_VIDEO_URL } from "../lib/site-config";
import { SectionHeading } from "./SectionHeading";

interface OmniSearchProductVideoProps {
  src?: string;
  poster?: string;
}

export function OmniSearchProductVideo({
  src = PRODUCT_VIDEO_URL,
  poster,
}: OmniSearchProductVideoProps) {
  const [selectedChapter, setSelectedChapter] = useState(0);

  const walkthroughChapters = [
    {
      time: "00:00",
      label: "Natural language query",
      detail:
        "Type a conceptual query like 'find my notes about neural networks' without remembering exact filenames.",
    },
    {
      time: "00:18",
      label: "Hybrid FTS5 + Vector fusion",
      detail:
        "SQLite FTS5 BM25 and ChromaDB cosine similarity execute concurrently and fuse via Reciprocal Rank Fusion.",
    },
    {
      time: "00:36",
      label: "Instant local preview",
      detail:
        "Inspect matching pages, slides, code blocks, and media timestamps directly inside the preview pane.",
    },
  ];

  // When a real video URL is configured in site-config.ts, render the native accessible player
  if (src && src.trim().length > 0) {
    return (
      <div className="relative w-full aspect-video rounded-[14px] overflow-hidden bg-white dark:bg-[#11212D] border border-[#9BA8AB]/75 dark:border-[#253745] shadow-[0_16px_40px_-12px_rgba(6,20,27,0.2)] dark:shadow-[0_16px_40px_-12px_rgba(6,20,27,0.7)]">
        <video
          src={src}
          poster={poster}
          controls
          preload="metadata"
          className="w-full h-full object-cover"
        >
          Your browser does not support embedded product videos.
        </video>
      </div>
    );
  }

  // Default: Production-grade architectural placeholder when PRODUCT_VIDEO_URL is empty
  return (
    <div className="relative w-full aspect-video rounded-[14px] overflow-hidden bg-white dark:bg-[#11212D] border border-[#9BA8AB]/75 dark:border-[#253745] flex flex-col justify-between p-6 sm:p-10 transition-colors duration-200">
      {/* Subtle architectural grid lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(155,168,171,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(155,168,171,0.22)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(37,55,69,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,55,69,0.25)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-xs text-[#4A5C6A] dark:text-[#9BA8AB]">
          <Sparkles className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
          <span>OMNISEARCH WORKFLOW OVERVIEW</span>
        </div>
        <span className="font-mono text-xs text-[#4A5C6A] dark:text-[#9BA8AB] tracking-wider">
          16:9 · 1080P WALKTHROUGH
        </span>
      </div>

      {/* Center Play Visual & Status */}
      <div className="relative z-10 my-auto flex flex-col items-center text-center max-w-lg mx-auto py-6">
        <div className="w-16 h-16 rounded-full bg-[#06141B] border border-[#4A5C6A] flex items-center justify-center text-[#CCD0CF] shadow-lg">
          <Play className="w-6 h-6 text-[#38BDF8] translate-x-0.5" />
        </div>

        <p className="mt-5 font-mono text-xs uppercase tracking-widest text-[#0284C7] dark:text-[#38BDF8]">
          PRODUCT VIDEO · COMING SOON
        </p>

        <h3 className="mt-2 text-lg sm:text-xl font-semibold text-[#06141B] dark:text-[#CCD0CF]">
          {walkthroughChapters[selectedChapter].label}
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
          {walkthroughChapters[selectedChapter].detail}
        </p>
      </div>

      {/* Interactive Storyboard Chapters Bar */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-[#9BA8AB]/60 dark:border-[#253745]/90">
        {walkthroughChapters.map((chapter, idx) => {
          const isCurrent = selectedChapter === idx;
          return (
            <button
              key={chapter.time}
              type="button"
              onClick={() => setSelectedChapter(idx)}
              className={`text-left p-3 rounded-[10px] border transition-colors ${
                isCurrent
                  ? "bg-[#E4E8E7] dark:bg-[#000000] border-[#4A5C6A] text-[#06141B] dark:text-[#CCD0CF]"
                  : "bg-[#F4F6F6] dark:bg-[#000000]/50 border-[#CCD0CF] dark:border-[#253745] text-[#253745] dark:text-[#9BA8AB] hover:text-[#06141B] dark:hover:text-[#CCD0CF]"
              }`}
            >
              <div className="flex items-center justify-between font-mono text-[11px]">
                <span
                  className={
                    isCurrent
                      ? "text-[#0284C7] dark:text-[#38BDF8]"
                      : "text-[#4A5C6A] dark:text-[#9BA8AB]"
                  }
                >
                  {chapter.time}
                </span>
                {isCurrent && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                )}
              </div>
              <p className="mt-1 text-xs font-medium truncate">
                {chapter.label}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function VideoPlaceholderSection() {
  return (
    <section className="bg-[#EEF1F0] dark:bg-[#000000] py-20 sm:py-24 border-b border-[#9BA8AB]/50 dark:border-[#11212D] transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          title="See OmniSearch in action."
          description="Search naturally. Discover relevant files. Preview results instantly."
        />

        <div className="mt-10">
          <OmniSearchProductVideo src={PRODUCT_VIDEO_URL} />
        </div>
      </div>
    </section>
  );
}
