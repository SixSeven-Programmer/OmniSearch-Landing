"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  FileText,
  Presentation,
  FileCode,
  FolderOpen,
  SlidersHorizontal,
  Layers,
  CornerDownLeft,
  ExternalLink,
} from "lucide-react";

interface MockSearchResult {
  id: string;
  filename: string;
  path: string;
  format: "PDF" | "PPTX" | "MD" | "PY";
  location: string;
  matchType: "Hybrid match" | "Semantic match" | "Keyword + Semantic";
  rrfScore: string;
  similarity: string;
  snippetParts: { text: string; highlight?: boolean }[];
  previewTitle: string;
  previewMeta: string;
  previewContent: string[];
}

interface QueryScenario {
  id: string;
  label: string;
  query: string;
  intentSummary: string;
  executionMs: string;
  results: MockSearchResult[];
}

const SCENARIOS: QueryScenario[] = [
  {
    id: "neural-notes",
    label: "neural networks notes",
    query: "find my notes about neural networks",
    intentSummary:
      "Hybrid retrieval: FTS5 lexical match + EmbeddingGemma dense cosine similarity",
    executionMs: "18.4 ms",
    results: [
      {
        id: "dl-notes",
        filename: "Deep Learning Notes.pdf",
        path: "C:\\Users\\Alex\\College\\CS482\\Notes\\Deep Learning Notes.pdf",
        format: "PDF",
        location: "Page 14 · Section 3.2",
        matchType: "Keyword + Semantic",
        rrfScore: "0.0328",
        similarity: "0.91",
        snippetParts: [
          {
            text: "Multi-layer perceptrons and convolutional ",
          },
          { text: "neural networks", highlight: true },
          {
            text: " compute hierarchical feature representations through backpropagation and gradient descent.",
          },
        ],
        previewTitle: "3.2 Backpropagation & Representation Learning",
        previewMeta: "PDF Document · 42 pages · 2.4 MB · SHA-256 verified",
        previewContent: [
          "In a feedforward neural network, each layer applies an affine transformation followed by a non-linear activation function f(Wx + b).",
          "During training, gradients of the loss function L with respect to weights W are propagated backward from the output layer using the chain rule.",
          "Key takeaway: Vanishing gradients in deep architectures are mitigated using residual connections (ResNet) and batch normalization.",
        ],
      },
      {
        id: "ai-lecture",
        filename: "AI Lecture 08.pptx",
        path: "C:\\Users\\Alex\\College\\CS482\\Slides\\AI Lecture 08.pptx",
        format: "PPTX",
        location: "Slide 08 of 34",
        matchType: "Semantic match",
        rrfScore: "0.0312",
        similarity: "0.88",
        snippetParts: [
          {
            text: "Slide 08 — Spatial Feature Extraction: How convolutional filters detect edges, textures, and object parts across ",
          },
          { text: "deep network layers", highlight: true },
          { text: "." },
        ],
        previewTitle: "Slide 08: Convolutional Feature Hierarchies",
        previewMeta: "PowerPoint Presentation · 34 slides · 8.1 MB",
        previewContent: [
          "• Layer 1–2: Gabor-like edge and orientation detectors (3x3 stride 1 kernels)",
          "• Layer 3–4: Motif and texture aggregation via spatial pooling",
          "• Fully Connected Head: Maps flattened activation tensor to class logits",
        ],
      },
      {
        id: "ml-md",
        filename: "machine_learning_notes.md",
        path: "C:\\Users\\Alex\\Research\\Wiki\\machine_learning_notes.md",
        format: "MD",
        location: "Lines 84–112",
        matchType: "Keyword + Semantic",
        rrfScore: "0.0298",
        similarity: "0.86",
        snippetParts: [
          {
            text: "## Training Dynamics — Notes on weight initialization (He/Xavier) when optimizing ",
          },
          { text: "neural networks", highlight: true },
          { text: " on local datasets." },
        ],
        previewTitle: "## Training Dynamics & Regularization",
        previewMeta: "Markdown Note · 6.8 KB · UTF-8",
        previewContent: [
          "### Weight Initialization",
          "Using He initialization scales variance by 2/n_in, preventing signal explosion across ReLU layers.",
          "### AdamW Optimizer",
          "Decouples weight decay from adaptive gradient updates for stable convergence.",
        ],
      },
      {
        id: "cnn-py",
        filename: "CNN Architecture.py",
        path: "C:\\Users\\Alex\\Projects\\vision-lab\\models\\CNN Architecture.py",
        format: "PY",
        location: "Lines 18–54",
        matchType: "Semantic match",
        rrfScore: "0.0285",
        similarity: "0.84",
        snippetParts: [
          {
            text: "class ConvNetBlock(nn.Module): # Implements residual ",
          },
          { text: "neural network", highlight: true },
          {
            text: " feature extractor with 2D convolution and layer norm",
          },
        ],
        previewTitle: "class ConvNetBlock(nn.Module):",
        previewMeta: "Python Source · 142 lines · 4.2 KB",
        previewContent: [
          "class ConvNetBlock(nn.Module):",
          "    def __init__(self, in_channels: int, out_channels: int):",
          "        super().__init__()",
          "        self.conv = nn.Conv2d(in_channels, out_channels, kernel_size=3, padding=1)",
          "        self.norm = nn.BatchNorm2d(out_channels)",
          "        self.act = nn.GELU()",
        ],
      },
    ],
  },
  {
    id: "cnn-slides",
    label: "CNN architecture slides",
    query: "presentation where I explained CNN architecture",
    intentSummary:
      "Semantic concept match: locates slide deck even without 'presentation' in filename",
    executionMs: "21.0 ms",
    results: [
      {
        id: "ai-lecture-2",
        filename: "AI Lecture 08.pptx",
        path: "C:\\Users\\Alex\\College\\CS482\\Slides\\AI Lecture 08.pptx",
        format: "PPTX",
        location: "Slide 12 of 34",
        matchType: "Semantic match",
        rrfScore: "0.0331",
        similarity: "0.93",
        snippetParts: [
          {
            text: "Architectural walkthrough: Input tensor (224×224×3) → ",
          },
          { text: "Conv2D + MaxPool blocks", highlight: true },
          {
            text: " → Global Average Pooling → Softmax classifier.",
          },
        ],
        previewTitle: "Slide 12: End-to-End CNN Architecture Diagram",
        previewMeta: "PowerPoint Presentation · 34 slides · 8.1 MB",
        previewContent: [
          "Speaker Notes: Walk through how receptive fields expand with depth.",
          "1. Stem: 7x7 Conv stride 2 reduces spatial resolution early.",
          "2. Stages 1–4: Bottleneck residual blocks preserve gradient flow.",
        ],
      },
      {
        id: "cnn-py-2",
        filename: "CNN Architecture.py",
        path: "C:\\Users\\Alex\\Projects\\vision-lab\\models\\CNN Architecture.py",
        format: "PY",
        location: "Lines 18–54",
        matchType: "Keyword + Semantic",
        rrfScore: "0.0315",
        similarity: "0.89",
        snippetParts: [
          {
            text: "Reference PyTorch implementation accompanying the ",
          },
          { text: "CNN architecture", highlight: true },
          { text: " seminar walkthrough." },
        ],
        previewTitle: "CNN Architecture.py — Seminar Implementation",
        previewMeta: "Python Source · 142 lines · 4.2 KB",
        previewContent: [
          "def build_seminar_cnn(num_classes: int = 10) -> nn.Module:",
          "    return nn.Sequential(",
          "        ConvNetBlock(3, 64),",
          "        nn.MaxPool2d(2),",
          "        ConvNetBlock(64, 128),",
          "    )",
        ],
      },
    ],
  },
];

export function ProductMockup() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [selectedResultIndex, setSelectedResultIndex] = useState(0);
  const [activeMode, setActiveMode] = useState<"Hybrid" | "Keyword" | "Semantic">(
    "Hybrid"
  );

  const currentScenario = SCENARIOS[scenarioIndex];
  const currentResult =
    currentScenario.results[selectedResultIndex] || currentScenario.results[0];

  const handleScenarioSwitch = (idx: number) => {
    setScenarioIndex(idx);
    setSelectedResultIndex(0);
  };

  const renderFormatIcon = (format: MockSearchResult["format"]) => {
    switch (format) {
      case "PDF":
        return (
          <FileText className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
        );
      case "PPTX":
        return (
          <Presentation className="w-4 h-4 text-[#4A5C6A] dark:text-[#9BA8AB]" />
        );
      case "PY":
        return (
          <FileCode className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
        );
      default:
        return (
          <FileText className="w-4 h-4 text-[#06141B] dark:text-[#CCD0CF]" />
        );
    }
  };

  return (
    <div className="w-full rounded-[20px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/75 dark:border-[#253745] shadow-[0_20px_50px_-15px_rgba(6,20,27,0.18)] dark:shadow-[0_24px_60px_-15px_rgba(6,20,27,0.85)] overflow-hidden transition-colors duration-200 font-sans">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#E4E8E7] dark:bg-[#000000] border-b border-[#9BA8AB]/60 dark:border-[#253745]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-[#9BA8AB] dark:bg-[#253745]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#9BA8AB] dark:bg-[#253745]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#9BA8AB] dark:bg-[#253745]" />
          </div>
          <span className="font-mono text-xs text-[#253745] dark:text-[#9BA8AB] pl-1">
            OmniSearch Desktop · Local Index (127.0.0.1:8000)
          </span>
        </div>

        {/* Interactive Suggestion Pills */}
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-xs font-sans font-medium text-[#4A5C6A] dark:text-[#9BA8AB]">
            Suggestions:
          </span>
          {SCENARIOS.map((sc, idx) => (
            <button
              key={sc.id}
              type="button"
              onClick={() => handleScenarioSwitch(idx)}
              className={`px-3 py-1 rounded-full text-xs font-sans font-medium transition-colors ${
                scenarioIndex === idx
                  ? "bg-[#06141B] text-[#CCD0CF] dark:bg-[#253745] dark:text-[#CCD0CF] border border-[#06141B] dark:border-[#4A5C6A]"
                  : "text-[#253745] dark:text-[#9BA8AB] hover:text-[#06141B] dark:hover:text-[#CCD0CF] hover:bg-[#CCD0CF]/50 dark:hover:bg-[#11212D]"
              }`}
            >
              {sc.label}
            </button>
          ))}
        </div>
      </div>

      {/* Application Shell Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        {/* Left Mini Navigation Rail inside the Desktop Mockup */}
        <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-between py-4 bg-[#06141B] dark:bg-[#000000]/70 border-r border-[#9BA8AB]/50 dark:border-[#253745]">
          <div className="flex flex-col items-center gap-4">
            <div className="w-9 h-9 rounded-[10px] bg-[#11212D] border border-[#253745] flex items-center justify-center overflow-hidden p-1">
              <Image
                src="/assets/aistudio/OmniSearch_Logo_f0580944.png"
                alt="OmniSearch logo"
                width={32}
                height={32}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-9 h-9 rounded-[10px] bg-[#253745] text-[#CCD0CF] flex items-center justify-center">
              <Search className="w-4 h-4" />
            </div>
            <div className="w-9 h-9 rounded-[10px] text-[#9BA8AB] flex items-center justify-center">
              <FolderOpen className="w-4 h-4" />
            </div>
            <div className="w-9 h-9 rounded-[10px] text-[#9BA8AB] flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <div className="w-9 h-9 rounded-[10px] text-[#9BA8AB] flex items-center justify-center">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
        </div>

        {/* Center Search + Ranked Results Column */}
        <div className="lg:col-span-7 p-4 sm:p-6 flex flex-col border-b lg:border-b-0 lg:border-r border-[#9BA8AB]/60 dark:border-[#253745]">
          {/* Editorial Workspace Header inside Technical Workspace */}
          <div className="mb-4">
            <p className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4A5C6A] dark:text-[#9BA8AB]">
              LOCAL-FIRST RETRIEVAL WORKSPACE
            </p>
            <h2 className="mt-1 font-serif text-xl sm:text-2xl font-medium tracking-[-0.015em] leading-[1.12] text-[#06141B] dark:text-[#CCD0CF]">
              Everything on your computer, intelligently searchable.
            </h2>
          </div>

          {/* Step 1: Query Input Bar (Neutral Sans-Serif + Crisp Monospace Keycap Badges) */}
          <div className="rounded-[12px] bg-[#F4F6F6] dark:bg-[#000000] border border-[#9BA8AB] dark:border-[#4A5C6A]/70 p-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <Search className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
              <span className="font-sans text-sm sm:text-base text-[#06141B] dark:text-[#CCD0CF] font-normal truncate">
                {currentScenario.query}
              </span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-[6px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/80 dark:border-[#253745] font-mono text-[11px] font-medium text-[#4A5C6A] dark:text-[#9BA8AB] shadow-[0_1px_0_0_rgba(6,20,27,0.12)]">
                Ctrl K
              </kbd>
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-[6px] bg-white dark:bg-[#11212D] border border-[#9BA8AB]/80 dark:border-[#253745] font-mono text-[11px] font-medium text-[#4A5C6A] dark:text-[#9BA8AB] shadow-[0_1px_0_0_rgba(6,20,27,0.12)]">
                <CornerDownLeft className="w-3 h-3" /> Enter
              </kbd>
            </div>
          </div>

          {/* Step 2: Understanding / Mode Toggles (Neutral Sans-Serif) */}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#9BA8AB]/50 dark:border-[#253745]/80 text-xs">
            <div className="flex items-center gap-1 bg-[#E8ECEB] dark:bg-[#000000] p-1 rounded-[8px] border border-[#9BA8AB]/70 dark:border-[#253745] font-sans">
              {(["Hybrid", "Keyword", "Semantic"] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setActiveMode(mode)}
                  className={`px-2.5 py-1 rounded-[6px] font-sans font-medium transition-colors ${
                    activeMode === mode
                      ? "bg-[#06141B] text-[#CCD0CF] dark:bg-[#253745] dark:text-[#CCD0CF]"
                      : "text-[#253745] dark:text-[#9BA8AB] hover:text-[#06141B] dark:hover:text-[#CCD0CF]"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>

            <div className="font-mono text-[11px] text-[#4A5C6A] dark:text-[#9BA8AB] tabular-nums">
              {currentScenario.results.length} results ·{" "}
              {currentScenario.executionMs} · Mode: {activeMode}
            </div>
          </div>

          {/* Pipeline flow cue */}
          <div className="py-2 flex items-center gap-2 text-[11px] font-sans text-[#4A5C6A] dark:text-[#9BA8AB]">
            <span className="font-medium text-[#0284C7] dark:text-[#38BDF8]">
              Query understood
            </span>
            <span aria-hidden="true">→</span>
            <span className="truncate">{currentScenario.intentSummary}</span>
          </div>

          {/* Step 3: Ranked Results List */}
          <div className="mt-1 space-y-2.5 flex-1">
            {currentScenario.results.map((item, idx) => {
              const isSelected = idx === selectedResultIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedResultIndex(idx)}
                  className={`w-full text-left p-3.5 rounded-[12px] border transition-colors ${
                    isSelected
                      ? "bg-[#E4E8E7] dark:bg-[#253745]/75 border-[#4A5C6A]"
                      : "bg-[#F7F9F8] dark:bg-[#000000]/50 border-[#CCD0CF] dark:border-[#253745]/70 hover:bg-[#E8ECEB] dark:hover:bg-[#253745]/35 hover:border-[#9BA8AB] dark:hover:border-[#4A5C6A]/50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      {renderFormatIcon(item.format)}
                      <span className="font-sans font-medium text-sm text-[#06141B] dark:text-[#CCD0CF] truncate">
                        {item.filename}
                      </span>
                      <span className="font-mono text-[11px] text-[#4A5C6A] dark:text-[#9BA8AB] shrink-0">
                        · {item.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 font-mono text-[11px] tabular-nums">
                      <span className="font-sans font-medium text-[#0284C7] dark:text-[#38BDF8]">
                        {item.matchType}
                      </span>
                      <span className="text-[#4A5C6A] dark:text-[#9BA8AB]">
                        cos {item.similarity}
                      </span>
                    </div>
                  </div>

                  <p className="mt-2 font-sans text-xs text-[#253745] dark:text-[#9BA8AB] leading-relaxed line-clamp-2">
                    {item.snippetParts.map((part, pIdx) =>
                      part.highlight ? (
                        <mark
                          key={pIdx}
                          className="bg-[#0284C7]/15 dark:bg-[#38BDF8]/15 text-[#06141B] dark:text-[#CCD0CF] px-1 py-0.5 rounded-[4px]"
                        >
                          {part.text}
                        </mark>
                      ) : (
                        <React.Fragment key={pIdx}>{part.text}</React.Fragment>
                      )
                    )}
                  </p>

                  <div className="mt-2 font-mono text-[10px] text-[#4A5C6A]/90 dark:text-[#9BA8AB]/80 truncate">
                    {item.path}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Step 4 — Instant File Preview Inspector */}
        <div className="lg:col-span-4 p-4 sm:p-6 bg-[#F4F6F6] dark:bg-[#000000]/45 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#9BA8AB]/60 dark:border-[#253745]">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4A5C6A] dark:text-[#9BA8AB]">
                Instant Preview
              </span>
              <span className="font-mono text-[11px] text-[#0284C7] dark:text-[#38BDF8] tabular-nums">
                RRF {currentResult.rrfScore}
              </span>
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-2">
                {renderFormatIcon(currentResult.format)}
                <h3 className="font-sans text-sm font-semibold text-[#06141B] dark:text-[#CCD0CF] truncate">
                  {currentResult.filename}
                </h3>
              </div>
              <p className="mt-1 font-sans text-xs text-[#4A5C6A] dark:text-[#9BA8AB]">
                {currentResult.previewMeta}
              </p>
            </div>

            {/* Extracted Chunk Surface */}
            <div className="mt-4 p-4 rounded-[12px] bg-white dark:bg-[#000000] border border-[#9BA8AB]/70 dark:border-[#253745] space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#4A5C6A] dark:text-[#9BA8AB] pb-2 border-b border-[#CCD0CF] dark:border-[#11212D]">
                <span className="font-sans font-medium text-[#06141B] dark:text-[#CCD0CF]">
                  {currentResult.previewTitle}
                </span>
                <span>{currentResult.location}</span>
              </div>
              <div
                className={`space-y-2 text-xs leading-relaxed ${
                  currentResult.format === "PY"
                    ? "font-mono text-[#06141B] dark:text-[#CCD0CF]"
                    : "font-sans text-[#253745] dark:text-[#9BA8AB]"
                }`}
              >
                {currentResult.previewContent.map((line, lIdx) => (
                  <p key={lIdx}>{line}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#9BA8AB]/60 dark:border-[#253745] flex items-center justify-between text-xs font-sans">
            <span className="text-[11px] text-[#4A5C6A] dark:text-[#9BA8AB]">
              Indexed locally · Zero cloud upload
            </span>
            <span className="inline-flex items-center gap-1 font-medium text-[#06141B] dark:text-[#CCD0CF]">
              <span>Open file</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#4A5C6A] dark:text-[#9BA8AB]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
