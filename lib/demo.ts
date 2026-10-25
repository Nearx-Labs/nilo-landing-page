// Fixed demo content shared by the hero and the walkthrough.

export const GITHUB_URL = "https://github.com/Nearx-Labs/nilo";
export const APP_URL = "https://app.nilo-ai.xyz/";

/** Investor profiles, as the app names and describes them (nilo/apps/web/src/profile.ts). */
export const PROFILES = [
  { id: "conservative", label: "Conservador", text: "Primeiro, preservar o capital. Quase tudo em stablecoins, pouca oscilação." },
  { id: "moderate", label: "Moderado", text: "Um equilíbrio entre estabilidade e crescimento." },
  { id: "aggressive", label: "Arrojado", text: "Aceita oscilação em troca de um potencial de retorno maior." },
] as const;

/** Illustrative suggestions for the walkthrough. Not financial advice. */
export const SUGGESTIONS = [
  { name: "Reserva em dólar", mix: "100% USDC", note: "Quase sem oscilação." },
  { name: "Equilíbrio", mix: "70% USDC · 30% XLM", note: "Estável, com espaço para crescer." },
  { name: "Crescimento", mix: "40% USDC · 60% XLM", note: "Mais oscilação, mais potencial." },
] as const;
