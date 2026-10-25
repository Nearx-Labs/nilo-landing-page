import { GITHUB_URL } from "@/lib/demo";
import { GithubIcon, Logo } from "../icons";
import { Container } from "../ui";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container>
        <div className="flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="flex items-center gap-3">
            <Logo id="logo-footer" size={22} />
            <span className="text-sm font-medium tracking-[-0.01em]">Nilo</span>
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-150 hover:text-text"
          >
            <GithubIcon width={16} height={16} />
            github.com/Nearx-Labs/nilo
          </a>
        </div>
        <div className="border-t border-line py-6 text-[13px] text-faint">
          <p>HackMeridian 2026 · Stellar Unlocked · só testnet</p>
        </div>
      </Container>
    </footer>
  );
}
