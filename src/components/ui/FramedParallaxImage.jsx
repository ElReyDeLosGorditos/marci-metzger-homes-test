import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FramedParallaxImage({
  src,
  alt = "",
  className = "",
  strength = 12,
  caption = "",
  number = "01",
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${strength}%`, `${strength}%`]
  );

  return (
    <div className="group relative">
      {/* Matte Gallery Border Envelope */}
      <div
        ref={ref}
        className={`relative overflow-hidden border border-[#171715]/20 bg-[#e8e3d5] p-3 sm:p-4 shadow-sm ${className}`}
      >
        <div className="relative h-full w-full overflow-hidden bg-[#171715]">
          <motion.img
            src={src}
            alt={alt}
            style={{ y }}
            className="absolute -top-[15%] left-0 h-[130%] w-full object-cover contrast-[1.12] saturate-[1.08] transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Film Grain Texture Mask - Masks low resolution */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Vignette Depth Gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 mix-blend-multiply" />
        </div>
      </div>

      {/* Under-Frame Editorial Details */}
      <div className="mt-2.5 flex items-center justify-between px-1 font-sans text-[10px] uppercase tracking-[0.2em] text-[#171715]/60">
        <span>{number} / {caption}</span>
        <span className="h-px w-6 bg-[#171715]/20" />
      </div>
    </div>
  );
}