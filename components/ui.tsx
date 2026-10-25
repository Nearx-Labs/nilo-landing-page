// Shared primitives of the page's design system. Sections build on these instead of
// restyling headings, buttons or frames on their own.
import type { CSSProperties, ReactNode } from "react";
import { ChevronIcon } from "./icons";

/** Page width and side gutter. */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1120px] px-4 sm:px-6 ${className}`}>{children}</div>;
}

/** A major section: faint band at the top, generous vertical rhythm. */
export function Band({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <section id={id} className="band scroll-mt-16 py-20 sm:py-32">
      <Container>{children}</Container>
    </section>
  );
}

/**
 * Small section label: a colored pill, a short text and a chevron.
 * Tone roles: "accent" only for the payment walkthrough (where the AI appears),
 * "ok" only for sections about what is verified, "neutral" everywhere else.
 */
export function SectionLabel({ tone = "neutral", children }: { tone?: "accent" | "ok" | "neutral"; children: ReactNode }) {
  const dot = { accent: "bg-accent-2", ok: "bg-ok", neutral: "bg-muted" }[tone];
  return (
    <p className="flex items-center gap-2 text-[13px] text-text">
      <span aria-hidden="true" className={`h-1.5 w-3 rounded-full ${dot}`} />
      {children}
      <ChevronIcon width={12} height={12} className="text-faint" />
    </p>
  );
}

/** Section heading block: label, display title and an optional lead paragraph. */
export function SectionHead({
  label,
  tone,
  title,
  lead,
}: {
  label: string;
  tone?: "accent" | "ok" | "neutral";
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <div className="max-w-[640px]">
      <SectionLabel tone={tone}>{label}</SectionLabel>
      <h2 className="display-2 mt-5">{title}</h2>
      {lead && <p className="lead mt-6 max-w-[46ch]">{lead}</p>}
    </div>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-2";

/** The page's one primary action style (accent). */
export function PrimaryButton({ href, children, external }: { href: string; children: ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${buttonBase} bg-accent text-white hover:bg-accent-2`}
    >
      {children}
    </a>
  );
}

/** Quiet secondary action: text with a chevron, no fill. */
export function SecondaryLink({ href, children, external }: { href: string; children: ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${buttonBase} text-text hover:bg-surface-3`}
    >
      {children}
      <ChevronIcon width={14} height={14} className="text-muted" />
    </a>
  );
}

/**
 * Product screenshot laid back in 3D and fading into the canvas.
 * `tilt` overrides the angles (degrees) for one use; keep them modest.
 */
export function TiltFrame({
  children,
  tilt,
  className = "",
}: {
  children: ReactNode;
  tilt?: { x?: number; z?: number; skew?: number };
  className?: string;
}) {
  const style = {
    ...(tilt?.x !== undefined && { "--tilt-x": `${tilt.x}deg` }),
    ...(tilt?.z !== undefined && { "--tilt-z": `${tilt.z}deg` }),
    ...(tilt?.skew !== undefined && { "--tilt-skew": `${tilt.skew}deg` }),
  } as CSSProperties;
  return (
    <div className={`tilt-stage ${className}`}>
      <div className="tilt overflow-hidden rounded-xl border border-line-strong bg-surface shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)]" style={style}>
        {children}
      </div>
    </div>
  );
}

/** Row of small features split by hairlines (2 to 4 columns). */
export function FeatureRow({ children }: { children: ReactNode }) {
  return <div className="grid gap-8 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">{children}</div>;
}

export function Feature({ icon, title, children }: { icon?: ReactNode; title: string; children: ReactNode }) {
  return (
    <div>
      <p className="flex items-center gap-2 text-sm font-medium text-text">
        {icon}
        {title}
      </p>
      <p className="mt-2 text-sm text-muted">{children}</p>
    </div>
  );
}
