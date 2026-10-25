import type { CSSProperties } from "react";

/**
 * Nilo's bot mascot, as in the app (nilo/apps/web/src/bots/StroopyAvatar.tsx): the grayscale image
 * masks a tint layer and is multiplied on top, so light parts take the color and the visor stays dark.
 * The tint is the accent, the color the page reserves for the AI.
 */
export function Stroopy({
  variant = "classic",
  size = 40,
}: {
  variant?: "classic" | "antenna" | "beanie" | "graduate";
  size?: number;
}) {
  const src = `/stroopies/${variant}.png`;
  const mask = `url(${src}) center / contain no-repeat`;
  const box: CSSProperties = { width: size, height: size };
  return (
    <span className="relative inline-flex flex-none" style={box} aria-hidden="true">
      <span className="absolute inset-0 bg-accent-2" style={{ WebkitMask: mask, mask }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- tiny decorative mask layer */}
        <img src={src} alt="" draggable={false} className="block size-full object-contain mix-blend-multiply" />
      </span>
    </span>
  );
}
