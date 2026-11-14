import React from "react";
import {
  FileText,
  FileSpreadsheet,
  Presentation,
  FileCode,
  Image as ImageIcon,
  FileAudio,
  FileVideo,
  Folder,
} from "lucide-react";

const FRAGMENTED_FILES = [
  {
    type: "PDF",
    name: "Q3_Architecture_Review_v4_FINAL.pdf",
    folder: "C:\\Users\\Documents\\Work\\Reviews\\",
    icon: FileText,
  },
  {
    type: "DOCX",
    name: "project_proposal_draft_oct.docx",
    folder: "C:\\Users\\Desktop\\Temp_Notes\\",
    icon: FileText,
  },
  {
    type: "PPTX",
    name: "Deck_for_Monday_Seminar.pptx",
    folder: "C:\\Users\\College\\Seminars\\2026\\",
    icon: Presentation,
  },
  {
    type: "XLSX",
    name: "experiment_metrics_run_12.xlsx",
    folder: "C:\\Users\\Research\\Datasets\\Outputs\\",
    icon: FileSpreadsheet,
  },
  {
    type: "CODE",
    name: "vector_reconcile_worker.py",
    folder: "C:\\Users\\Projects\\engine\\services\\",
    icon: FileCode,
  },
  {
    type: "IMAGE",
    name: "IMG_4092_whiteboard_diagram.png",
    folder: "C:\\Users\\Downloads\\Exports\\",
    icon: ImageIcon,
  },
  {
    type: "AUDIO",
    name: "supervisor_feedback_session_04.m4a",
    folder: "C:\\Users\\Recordings\\Meetings\\",
    icon: FileAudio,
  },
  {
    type: "VIDEO",
    name: "screen_capture_demo_walkthrough.mp4",
    folder: "C:\\Users\\Videos\\Captures\\",
    icon: FileVideo,
  },
];

export function ProblemSection() {
  return (
    <section className="bg-[#EEF1F0] dark:bg-[#000000] py-20 sm:py-28 border-b border-[#9BA8AB]/50 dark:border-[#11212D] transition-colors duration-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#4A5C6A] dark:text-[#9BA8AB] mb-3">
            THE PROBLEM
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-[-0.02em] text-[#06141B] dark:text-[#CCD0CF] leading-[1.08]">
            Your files are everywhere.
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
            Documents, presentations, code, images, audio and video can live
            across countless folders. Finding one often means remembering where
            you saved it — or what it was called.
          </p>
        </div>

        {/* Fragmented File Environment Representation */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {FRAGMENTED_FILES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.type}
                className="p-4 rounded-[12px] bg-white dark:bg-[#11212D]/70 border border-[#9BA8AB]/70 dark:border-[#253745] flex flex-col justify-between gap-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#06141B] dark:text-[#CCD0CF]">
                    {item.type}
                  </span>
                  <Icon className="w-4 h-4 text-[#4A5C6A] dark:text-[#9BA8AB]" />
                </div>

                <div>
                  <p className="font-sans text-xs font-medium text-[#06141B] dark:text-[#CCD0CF] truncate">
                    {item.name}
                  </p>
                  <div className="mt-1.5 flex items-center gap-1.5 text-[11px] font-mono text-[#4A5C6A] dark:text-[#9BA8AB] truncate">
                    <Folder className="w-3 h-3 shrink-0 text-[#4A5C6A]" />
                    <span className="truncate">{item.folder}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition Statement */}
        <div className="mt-14 pt-10 border-t border-[#9BA8AB]/50 dark:border-[#11212D] flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-[-0.02em] leading-[1.1] text-[#06141B] dark:text-[#CCD0CF]">
            Your search shouldn&apos;t be.
          </h3>
          <p className="font-sans text-sm sm:text-base text-[#253745] dark:text-[#9BA8AB] max-w-md leading-relaxed">
            OmniSearch indexes your selected folders once and lets you search by
            exact phrase, technical identifier, or natural meaning.
          </p>
        </div>
      </div>
    </section>
  );
}
