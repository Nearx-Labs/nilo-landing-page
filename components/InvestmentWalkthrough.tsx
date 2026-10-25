"use client";

import { type CSSProperties, type KeyboardEvent, useEffect, useRef, useState } from "react";
import { PROFILES, SUGGESTIONS } from "@/lib/demo";
import { CheckIcon, ChevronIcon, SendIcon, ShieldIcon } from "./icons";
import { Stroopy } from "./Stroopy";

const STEPS: { title: string; short: string; desc: string }[] = [
  {
    title: "Responda o questionário",
    short: "Questionário",
    desc: "O Nilo começa perguntando, não vendendo. Algumas perguntas rápidas mostram o quanto você já sabe de cripto e quanto risco aceita.",
  },
  {
    title: "Receba sugestões",
    short: "Sugestões",
    desc: "Com o seu perfil, o bot sugere investimentos que combinam com você, cada um explicado em uma frase.",
  },
  {
    title: "Escolha e confira",
    short: "Escolha",
    desc: "Você escolhe a sugestão que faz mais sentido. Antes de assinar, o Nilo mostra em palavras simples o que vai acontecer.",
  },
  {
    title: "O Nilo investe por você",
    short: "Investimento",
    desc: "Depois da sua assinatura, o bot executa o investimento na sua carteira e avisa no chat quando terminar.",
  },
];

const delay = (i: number) => ({ "--i": i }) as CSSProperties;

const ANSWERS = [
  { q: "Você já investiu em cripto?", a: "Nunca" },
  { q: "Se o investimento cair 20% num mês, você…", a: "Espero passar" },
  { q: "Por quanto tempo quer deixar investido?", a: "Mais de um ano" },
];

/** Step 1: the questionnaire and the profile it leads to. */
function Questionnaire() {
  const profile = PROFILES[1];
  return (
    <div className="flex flex-col gap-5">
      <ul className="flex flex-col divide-y divide-line border-y border-line">
        {ANSWERS.map((x, i) => (
          <li key={x.q} className="reveal flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-3" style={delay(i)}>
            <span className="text-sm text-muted">{x.q}</span>
            <span className="rounded-full border border-line-strong px-3 py-1 text-sm">{x.a}</span>
          </li>
        ))}
      </ul>
      <div className="reveal flex items-center gap-3" style={delay(3)}>
        <Stroopy size={36} />
        <p className="text-sm">
          Seu perfil: <span className="font-medium">{profile.label}</span>.{" "}
          <span className="text-muted">{profile.text}</span>
        </p>
      </div>
    </div>
  );
}

/** Step 2: suggestions that match the profile. */
function Suggestions() {
  return (
    <div className="flex flex-col gap-3">
      <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
        {SUGGESTIONS.map((s, i) => (
          <li key={s.name} className="reveal bg-surface-2 p-4" style={delay(i)}>
            <p className="font-medium">{s.name}</p>
            <p className="mt-1 font-mono text-xs text-muted">{s.mix}</p>
            <p className="mt-3 text-sm text-muted">{s.note}</p>
          </li>
        ))}
      </ul>
      <p className="text-xs text-faint">Exemplo ilustrativo. Sugestões educativas, não recomendação financeira.</p>
    </div>
  );
}

/** Step 3: the chosen suggestion, the plain-language check and the sign button. */
function ChooseAndCheck() {
  const [signed, setSigned] = useState(false);
  const choice = SUGGESTIONS[1];
  return (
    <div className="flex flex-col items-start gap-5">
      <p className="reveal text-sm text-muted">
        Você escolheu <span className="font-medium text-text">{choice.name}</span> ({choice.mix}).
      </p>
      <section className="reveal w-full rounded-xl border border-ok-line bg-ok-bg p-4 sm:p-5" style={delay(1)} aria-label="O que você vai assinar">
        <p className="flex items-center gap-2 text-xs font-medium text-ok">
          <ShieldIcon width={16} height={16} />
          Conferido com a transação real
        </p>
        <ul className="mt-3 flex flex-col gap-2 text-base">
          {[
            "Você investe 100 USDC.",
            "70 USDC continuam em dólar digital; 30 USDC viram XLM.",
            "O preço vem do oráculo Reflector, não da IA.",
          ].map((line) => (
            <li key={line} className="flex gap-2">
              <CheckIcon width={18} height={18} className="mt-0.5 flex-none text-ok" />
              {line}
            </li>
          ))}
        </ul>
      </section>
      {signed ? (
        <p className="reveal text-sm text-muted" role="status">
          <span className="font-medium text-text">Assinado.</span> Agora é com o Nilo.
        </p>
      ) : (
        <button
          type="button"
          onClick={() => setSigned(true)}
          className="reveal inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition-colors duration-150 hover:bg-accent-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-2"
          style={delay(2)}
        >
          <SendIcon width={18} height={18} />
          Assinar e investir
        </button>
      )}
    </div>
  );
}

/** Step 4: the bot reports back in the chat. */
function Invested() {
  return (
    <div className="flex flex-col gap-4">
      <div className="reveal flex items-end gap-3">
        <Stroopy size={32} />
        <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-line bg-surface-2 px-4 py-3 text-[15px]">
          Pronto! Seus 100 USDC estão investidos no <span className="font-medium">Equilíbrio</span>. Quer ver como
          ficou sua carteira?
        </div>
      </div>
      <p className="reveal text-sm text-muted" style={delay(1)}>
        Tudo acontece na sua carteira. O Nilo nunca guarda seus fundos nem suas chaves.
      </p>
    </div>
  );
}

function Panel({ step }: { step: number }) {
  switch (step) {
    case 0:
      return <Questionnaire />;
    case 1:
      return <Suggestions />;
    case 2:
      return <ChooseAndCheck />;
    default:
      return <Invested />;
  }
}

const ghostButton =
  "rounded-lg border border-line-strong px-4 py-2 text-sm font-medium text-text transition-colors duration-150 hover:bg-surface-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-2 disabled:opacity-40 disabled:hover:bg-transparent";

/** True from the lg breakpoint up, where the steps sit beside the panel and stack vertically. */
function useIsDesktop() {
  const [desktop, setDesktop] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const sync = () => setDesktop(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);
  return desktop;
}

/**
 * The four steps of an investment, one at a time. Left: a short list with a thin indicator on the active step.
 * Right: the product panel. Tabs follow the WAI-ARIA tabs pattern (arrows, Home, End).
 */
export function InvestmentWalkthrough() {
  const [step, setStep] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const desktop = useIsDesktop();
  const last = STEPS.length - 1;

  function go(next: number, focus = false) {
    const clamped = Math.max(0, Math.min(last, next));
    setStep(clamped);
    if (focus) tabs.current[clamped]?.focus();
  }

  function onKeyDown(e: KeyboardEvent) {
    const keys: Record<string, number> = {
      ArrowDown: step + 1,
      ArrowRight: step + 1,
      ArrowUp: step - 1,
      ArrowLeft: step - 1,
      Home: 0,
      End: last,
    };
    if (e.key in keys) {
      e.preventDefault();
      go(keys[e.key], true);
    }
  }

  const current = STEPS[step];
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
      <div
        role="tablist"
        aria-label="Etapas do investimento"
        aria-orientation={desktop ? "vertical" : "horizontal"}
        onKeyDown={onKeyDown}
        className="grid grid-cols-4 lg:flex lg:flex-col lg:self-start lg:pt-6"
      >
        {STEPS.map((s, i) => {
          const active = i === step;
          const bar = active ? "bg-text" : "bg-line-strong";
          return (
            <button
              key={s.title}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              id={`step-tab-${i}`}
              aria-selected={active}
              aria-controls="step-panel"
              aria-label={`Etapa ${i + 1}: ${s.title}`}
              tabIndex={active ? 0 : -1}
              onClick={() => go(i)}
              className={`group relative flex h-12 min-w-0 items-center justify-center gap-2 px-1 text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent-2 lg:h-auto lg:justify-start lg:gap-3 lg:py-2 lg:pl-5 ${
                active ? "text-text" : "text-muted hover:text-text"
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute inset-x-1 bottom-0 h-0.5 rounded-full transition-colors duration-150 lg:inset-x-auto lg:inset-y-0.5 lg:left-0 lg:h-auto lg:w-0.5 ${bar} ${
                  active ? "" : "group-hover:bg-faint"
                }`}
              />
              <span className="font-mono text-[13px] text-faint lg:w-4">{i + 1}</span>
              <span className="hidden truncate text-sm sm:inline lg:hidden">{s.short}</span>
              <span className="hidden text-[15px] lg:inline">{s.title}</span>
            </button>
          );
        })}
      </div>

      {/* Ghost layers behind the panel echo Linear's stacked product cards. */}
      <div className="relative min-w-0 pt-4 lg:pt-5">
        <div
          aria-hidden="true"
          className="absolute inset-x-8 top-0 h-24 rounded-2xl border border-line bg-surface/50 sm:inset-x-14"
          style={{ maskImage: "linear-gradient(180deg, #000, transparent)", WebkitMaskImage: "linear-gradient(180deg, #000, transparent)" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-4 top-2 h-24 rounded-2xl border border-line bg-surface/70 sm:inset-x-7 lg:top-2.5"
          style={{ maskImage: "linear-gradient(180deg, #000, transparent)", WebkitMaskImage: "linear-gradient(180deg, #000, transparent)" }}
        />
        <div
          role="tabpanel"
          id="step-panel"
          aria-labelledby={`step-tab-${step}`}
          className="relative flex min-h-[420px] flex-col overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)]"
        >
          <div className="flex items-center justify-between gap-3 border-b border-line bg-surface-2 px-4 py-3 sm:px-6">
            <p className="flex min-w-0 items-center gap-1.5 text-xs text-faint">
              <span>Nilo</span>
              <ChevronIcon width={12} height={12} />
              <span className="truncate">Investimento</span>
              <ChevronIcon width={12} height={12} />
              <span className="whitespace-nowrap font-mono text-muted">
                {step + 1}/{STEPS.length}
              </span>
            </p>
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-8">
            <h3 className="title-3">{current.title}</h3>
            <p className="mt-2 max-w-[60ch] text-muted">{current.desc}</p>

            {/* key remounts the panel so its reveal animation replays on every visit */}
            <div key={step} className="mt-6 min-w-0 flex-1">
              <Panel step={step} />
            </div>

            <div className="mt-8 flex items-center justify-between gap-3 border-t border-line pt-4">
              <button type="button" onClick={() => go(step - 1)} disabled={step === 0} className={ghostButton}>
                Voltar
              </button>
              {step < last ? (
                <button
                  type="button"
                  onClick={() => go(step + 1)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-accent-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-2"
                >
                  Próximo
                  <ChevronIcon width={16} height={16} />
                </button>
              ) : (
                <button type="button" onClick={() => go(0)} className={ghostButton}>
                  Recomeçar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
