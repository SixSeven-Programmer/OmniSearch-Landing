import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
}

export function BrandLogo({
  className = "",
  size = "md",
  showWordmark = true,
}: BrandLogoProps) {
  const badgeDimensions =
    size === "sm" ? "w-7 h-7" : size === "lg" ? "w-10 h-10" : "w-8 h-8";
  const pixelSize = size === "sm" ? 28 : size === "lg" ? 40 : 32;
  const textDimensions =
    size === "sm"
      ? "text-base"
      : size === "lg"
      ? "text-xl"
      : "text-[17px]";

  return (
    <span
      className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 select-none ${className}`}
    >
      <span
        className={`${badgeDimensions} relative inline-flex items-center justify-center rounded-[9px] bg-[#06141B] dark:bg-[#11212D] border border-[#253745] shadow-subtle overflow-hidden shrink-0`}
      >
        <Image
          src="/assets/aistudio/OmniSearch_Logo_f0580944.png"
          alt="OmniSearch logo"
          width={pixelSize}
          height={pixelSize}
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain p-1"
        />
      </span>

      {showWordmark && (
        <span
          className={`font-sans font-semibold tracking-tight text-[#06141B] dark:text-[#CCD0CF] transition-colors ${textDimensions}`}
        >
          OmniSearch
        </span>
      )}
    </span>
  );
}
