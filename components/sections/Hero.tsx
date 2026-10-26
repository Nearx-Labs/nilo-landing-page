import { GITHUB_URL } from "@/lib/demo";
import { HeroChat } from "../hero/HeroChat";
import { Container, PrimaryButton, SecondaryLink, TiltFrame } from "../ui";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="overflow-x-clip pt-14 sm:pt-20">
      <Container>
        <h1 id="hero-title" className="display-1 max-w-[16ch]">
          Crypto investing, through conversation.
        </h1>
        <p className="lead mt-6 max-w-[52ch]">
          <strong>Nilo is an investment bot.</strong> It learns what you know about crypto, suggests investments that
          fit you, and invests on your behalf. You choose and sign.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-1 sm:gap-3">
          <PrimaryButton href="#how-it-works">See how it works</PrimaryButton>
          <SecondaryLink href={GITHUB_URL} external>
            View on GitHub
          </SecondaryLink>
        </div>
        {/* clip only the bottom edge so the tilted window can't run into the strip below */}
        <div className="relative mt-10 [clip-path:inset(-200px_-600px_0_-600px)] sm:mt-6 lg:mt-2">
          <TiltFrame className="mx-auto max-w-[880px]">
            <HeroChat />
          </TiltFrame>
        </div>
        <div className="pt-12 pb-20 text-center sm:pt-16 sm:pb-28">
          <p className="text-[13px] text-faint">Built on Stellar. Connected to</p>
          <ul
            aria-label="Nilo integrations"
            className="mx-auto mt-6 flex max-w-[480px] flex-wrap items-center justify-center gap-x-8 gap-y-5 text-lg font-medium tracking-[-0.02em] text-muted sm:justify-between sm:gap-x-10 sm:text-xl"
          >
            {["Stellar", "Reflector", "Pollar"].map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
