import { GITHUB_URL } from "@/lib/demo";
import { HeroChat } from "../hero/HeroChat";
import { Container, PrimaryButton, SecondaryLink, TiltFrame } from "../ui";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="overflow-hidden pt-14 sm:pt-20">
      <Container>
        <h1 id="hero-title" className="display-1 max-w-[16ch]">
          Investir em cripto, conversando.
        </h1>
        <p className="lead mt-6 max-w-[52ch]">
          <strong>O Nilo é um bot de investimentos.</strong> Ele descobre o quanto você já sabe de cripto, sugere
          investimentos que combinam com você e investe por você. Você só escolhe e assina.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-1 sm:gap-3">
          <PrimaryButton href="#how-it-works">Veja como funciona</PrimaryButton>
          <SecondaryLink href={GITHUB_URL} external>
            Ver no GitHub
          </SecondaryLink>
        </div>
        {/* clip only the bottom edge so the tilted window can't run into the strip below */}
        <div className="relative mt-10 [clip-path:inset(-200px_-600px_0_-600px)] sm:mt-6 lg:mt-2">
          <TiltFrame className="mx-auto max-w-[880px]">
            <HeroChat />
          </TiltFrame>
        </div>
        <div className="pt-12 pb-20 text-center sm:pt-16 sm:pb-28">
          <p className="text-[13px] text-faint">Construído na Stellar. Conectado a</p>
          <ul
            aria-label="Integrações do Nilo"
            className="mx-auto mt-6 flex max-w-[800px] flex-wrap items-center justify-center gap-x-8 gap-y-5 text-lg font-medium tracking-[-0.02em] text-muted sm:justify-between sm:gap-x-10 sm:text-xl"
          >
            {["Stellar", "Reflector", "Pollar", "Freighter", "Albedo"].map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
