import type { CSSProperties, ReactNode } from "react";
import { SUGGESTIONS } from "@/lib/demo";
import { Stroopy } from "../Stroopy";

const delay = (i: number) => ({ "--i": i }) as CSSProperties;

function Bot({ children, i }: { children: ReactNode; i: number }) {
  return (
    <div className="reveal flex items-end gap-2 sm:gap-3" style={delay(i)}>
      <span className="sm:hidden">
        <Stroopy size={22} />
      </span>
      <span className="hidden sm:inline-flex">
        <Stroopy size={32} />
      </span>
      <div className="max-w-[88%] rounded-2xl rounded-bl-md border border-line bg-surface-2 px-3 py-2 text-[13px] sm:max-w-[85%] sm:px-4 sm:py-3 sm:text-[15px]">
        {children}
      </div>
    </div>
  );
}

function User({ children, i }: { children: ReactNode; i: number }) {
  return (
    <div className="reveal flex justify-end" style={delay(i)}>
      <p className="max-w-[80%] rounded-2xl rounded-br-md bg-surface-3 px-3 py-2 text-[13px] sm:px-4 sm:py-3 sm:text-[15px]">{children}</p>
    </div>
  );
}

/** The hero's product visual: a short conversation with the bot, from the first question to the suggestions. */
export function HeroChat() {
  return (
    <div className="flex flex-col bg-surface">
      <div className="flex items-center gap-2.5 border-b border-line bg-surface-2 px-4 py-2.5 sm:gap-3 sm:px-5 sm:py-3">
        <Stroopy size={24} />
        <p className="text-sm font-medium">Nilo</p>
        <p className="hidden text-xs text-muted sm:block">seu bot de investimentos</p>
      </div>
      <div className="flex flex-col gap-3 p-3.5 sm:gap-4 sm:p-6">
        <Bot i={0}>Oi! Antes de sugerir qualquer coisa, quero te conhecer. Você já investiu em cripto?</Bot>
        <User i={1}>Nunca. Quero começar com 100 USDC.</User>
        <Bot i={2}>
          Perfeito. Pelo seu perfil, <span className="font-medium">Moderado</span>, separei três sugestões:
          <span className="mt-2 flex flex-wrap gap-1.5 sm:mt-3 sm:grid sm:grid-cols-3 sm:gap-2">
            {SUGGESTIONS.map((s, i) => (
              <span
                key={s.name}
                className={`block rounded-lg border px-2 py-1 sm:px-3 sm:py-2 ${i === 1 ? "border-accent-2/60" : "border-line-strong"}`}
              >
                <span className="block text-xs font-medium sm:text-sm">{s.name}</span>
                <span className="hidden text-xs text-muted sm:block">{s.mix}</span>
              </span>
            ))}
          </span>
        </Bot>
      </div>
    </div>
  );
}
