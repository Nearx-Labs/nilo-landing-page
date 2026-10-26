import { APP_URL, GITHUB_URL } from "@/lib/demo";
import { GithubIcon, Logo } from "../icons";
import { Container } from "../ui";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#top" aria-label="Nilo home" className="flex min-h-10 items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-text">
          <Logo id="logo-top" size={32} />
          <span className="text-lg font-medium tracking-[-0.01em]">Nilo</span>
        </a>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs text-muted sm:gap-2 sm:text-sm">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-muted" />
            Testnet
          </span>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center gap-2 rounded-lg px-3 text-sm text-muted transition-colors duration-150 ease-out hover:bg-surface-3 hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text"
          >
            <GithubIcon width={16} height={16} />
            <span className="sr-only sm:not-sr-only">GitHub</span>
          </a>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center rounded-lg border border-line-strong bg-surface-2 px-4 text-sm font-medium text-text transition-colors duration-150 ease-out hover:bg-surface-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text"
          >
            Open Nilo
          </a>
        </div>
      </Container>
    </header>
  );
}
