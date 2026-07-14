import React from "react";
import { Play } from "lucide-react";

interface VideoPlaceholderProps {
  /** Describes which video should be inserted here */
  label: string;
  className?: string;
}

/**
 * Styled stand-in for an embedded video.
 * Keeps the exact aspect ratio / play-button treatment from the design
 * so a real <video> or embed (YouTube/Vimeo/etc.) can be dropped in later
 * without touching layout.
 *
 * TO ADD THE REAL VIDEO LATER:
 * Replace the contents of this component with e.g.
 *   <video className="h-full w-full object-cover" controls poster="...">
 *     <source src="/path/to/video.mp4" type="video/mp4" />
 *   </video>
 * or an <iframe> embed, and remove the placeholder background + label.
 */
export function VideoPlaceholder({ label, className = "" }: VideoPlaceholderProps) {
  return (
    <div
      className={`relative flex aspect-video w-full items-center justify-center overflow-hidden bg-[#1b2440] sm:aspect-[21/9] ${className}`}
    >
      {/* subtle placeholder texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,199,168,0.12),transparent_60%)]" />

      <button
        type="button"
        aria-label="Play video"
        className="relative z-10 flex size-[64px] items-center justify-center rounded-full bg-white/50 transition hover:bg-white/70 sm:size-[100px] lg:size-[140px]"
      >
        <Play className="h-[35%] w-[35%] fill-[#1F2349] text-[#1F2349] opacity-70" strokeWidth={0} />
      </button>

      <span className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap font-['Futura_PT:Book',sans-serif] text-[9px] uppercase tracking-[1px] text-white/50 sm:text-[10px]">
        {label}
      </span>
    </div>
  );
}
