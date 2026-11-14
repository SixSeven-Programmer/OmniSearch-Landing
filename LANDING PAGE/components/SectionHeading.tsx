import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignmentClasses =
    align === "center" ? "mx-auto text-center max-w-3xl" : "max-w-2xl";

  return (
    <div className={`${alignmentClasses} ${className}`}>
      {eyebrow && (
        <p className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#4A5C6A] dark:text-[#9BA8AB] mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-[-0.02em] text-[#06141B] dark:text-[#CCD0CF] leading-[1.08] [text-wrap:balance]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 font-sans text-base sm:text-lg font-normal text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
