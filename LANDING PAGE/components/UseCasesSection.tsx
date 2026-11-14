import React from "react";
import { SectionHeading } from "./SectionHeading";

const USE_CASES = [
  {
    role: "Students",
    description:
      "Find notes, assignments, presentations and project files.",
    exampleQuery: "lecture slides explaining dynamic programming recurrence",
    formats: "PDF · PPTX · DOCX · MD",
  },
  {
    role: "Researchers",
    description:
      "Search papers, references, datasets and research material.",
    exampleQuery: "ablation study table on embedding dimension truncation",
    formats: "PDF · XLSX · CSV · DOCX",
  },
  {
    role: "Developers",
    description:
      "Find source code, documentation, scripts and project files.",
    exampleQuery: "sqlite wal connection pool transaction rollback handler",
    formats: "PY · TS · MD · SQL · HTML",
  },
  {
    role: "Professionals",
    description:
      "Locate reports, presentations, spreadsheets and project documents.",
    exampleQuery: "quarterly operations review deck and cost breakdown",
    formats: "PPTX · XLSX · PDF · DOCX",
  },
];

export function UseCasesSection() {
  return (
    <section className="bg-[#EEF1F0] dark:bg-[#000000] py-20 sm:py-28 border-b border-[#9BA8AB]/50 dark:border-[#11212D] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="BUILT FOR REAL WORK"
          title="Designed for how people actually work with files."
          description="Whether you manage lecture archives, literature reviews, local repositories, or project documentation, OmniSearch adapts to your directory structure."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {USE_CASES.map((uc) => (
            <div
              key={uc.role}
              className="p-6 rounded-[14px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/70 dark:border-[#253745] flex flex-col justify-between gap-6"
            >
              <div>
                <h3 className="text-lg font-semibold text-[#06141B] dark:text-[#CCD0CF]">
                  {uc.role}
                </h3>
                <p className="mt-2.5 text-sm text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
                  {uc.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#CCD0CF] dark:border-[#253745]">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#4A5C6A] dark:text-[#9BA8AB]">
                    Example Search
                  </p>
                  <p className="mt-1 font-mono text-xs text-[#06141B] dark:text-[#CCD0CF]">
                    &ldquo;{uc.exampleQuery}&rdquo;
                  </p>
                </div>
                <p className="font-mono text-[11px] text-[#0284C7] dark:text-[#38BDF8]">
                  {uc.formats}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
