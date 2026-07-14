import React from "react";
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  /** Short label describing exactly what image belongs here, e.g. "Hero photo — pastor couple on stage" */
  label: string;
  /** Additional className, e.g. for sizing/positioning ("absolute inset-0", "h-full w-full", etc.) */
  className?: string;
  /** Tailwind grayscale filter toggle, used for the B&W collage strip in the quote hero */
  grayscale?: boolean;
  /** Rounded corner class override */
  rounded?: string;
}

/**
 * Visual placeholder that stands in for a real <img>.
 * Renders a dashed-border box with an icon + label so content editors
 * know exactly what to swap in and where.
 */
export function ImagePlaceholder({
  label,
  className = "",
  grayscale = false,
  rounded = "",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center overflow-hidden border border-dashed border-[#192441]/25 bg-[#e9e4d8] ${
        grayscale ? "grayscale" : ""
      } ${rounded} ${className}`}
    >
      <div className="flex flex-col items-center gap-1.5 px-2 text-center">
        <ImageIcon className="size-4 text-[#192441]/40 sm:size-5" strokeWidth={1.5} />
        <span className="font-['Futura_PT:Book',sans-serif] text-[8px] font-medium uppercase leading-tight tracking-[0.5px] text-[#192441]/50 sm:text-[9px]">
          {label}
        </span>
      </div>
    </div>
  );
}
