// Fixed demo content shared by the hero and the walkthrough.

export const GITHUB_URL = "https://github.com/Nearx-Labs/nilo";
export const APP_URL = "https://app.nilo-ai.xyz/";

/** Investor profiles, as the app names and describes them (nilo/apps/web/src/profile.ts). */
export const PROFILES = [
  { id: "conservative", label: "Conservative", text: "Preserve capital first. Mostly stablecoins, with little volatility." },
  { id: "moderate", label: "Moderate", text: "A balance between stability and growth." },
  { id: "aggressive", label: "Aggressive", text: "Accepts volatility in exchange for greater return potential." },
] as const;

/** Illustrative suggestions for the walkthrough. Not financial advice. */
export const SUGGESTIONS = [
  { name: "Dollar reserve", mix: "100% USDC", note: "Almost no volatility." },
  { name: "Balanced", mix: "70% USDC · 30% XLM", note: "Stable, with room to grow." },
  { name: "Growth", mix: "40% USDC · 60% XLM", note: "More volatility, more potential." },
] as const;
