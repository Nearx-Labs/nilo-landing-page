import { Band, SectionHead } from "../ui";

const LIMITS = [
  "Only on the Stellar testnet. Nothing here uses real money.",
  "Available assets: XLM and Circle's test USDC.",
  "Suggestions are educational, not financial advice.",
  "Nilo never holds your funds: everything stays in your wallet.",
];

export function Limits() {
  return (
    <Band>
      <SectionHead label="V1 limits" title="Built at a hackathon, honest about it." />
      <ul className="mt-12 max-w-[760px] border-t border-line">
        {LIMITS.map((l) => (
          <li key={l} className="border-b border-line py-4 text-sm text-muted">
            {l}
          </li>
        ))}
      </ul>
    </Band>
  );
}
