import type { CSSProperties, ReactNode } from "react";
import { SUGGESTIONS } from "@/lib/demo";
import { Stroopy } from "../Stroopy";

const delay = (i: number) => ({ "--i": i }) as CSSProperties;

function Bot({ children, i }: { children: ReactNode; i: number }) {
  return (
    <div className="reveal flex items-end gap-3" style={delay(i)}>
      <Stroopy size={32} />
      <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-line bg-surface-2 px-4 py-3 text-[15px]">
        {children}
      </div>
    </div>
  );
}

function User({ children, i }: { children: ReactNode; i: number }) {
  return (
    <div className="reveal flex justify-end" style={delay(i)}>
      <p className="max-w-[80%] rounded-2xl rounded-br-md bg-surface-3 px-4 py-3 text-[15px]">{children}</p>
    </div>
  );
}

/** The hero's product visual: a short conversation with the bot, from the first question to the suggestions. */
export function HeroChat() {
  return (
    <div className="flex flex-col bg-surface">
      <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-5 py-3">
        <Stroopy size={28} />
        <p className="text-sm font-medium">Nilo</p>
        <p className="text-xs text-muted">seu bot de investimentos</p>
      </div>
      <div className="flex flex-col gap-4 p-5 sm:p-6">
        <Bot i={0}>Oi! Antes de sugerir qualquer coisa, quero te conhecer. Você já investiu em cripto?</Bot>
        <User i={1}>Nunca. Quero começar com 100 USDC.</User>
        <Bot i={2}>
          Perfeito. Pelo seu perfil, <span className="font-medium">Moderado</span>, separei três sugestões:
          <span className="mt-3 grid gap-2 sm:grid-cols-3">
            {SUGGESTIONS.map((s, i) => (
              <span
                key={s.name}
                className={`block rounded-lg border px-3 py-2 ${i === 1 ? "border-accent-2/60" : "border-line-strong"}`}
              >
                <span className="block text-sm font-medium">{s.name}</span>
                <span className="block text-xs text-muted">{s.mix}</span>
              </span>
            ))}
          </span>
        </Bot>
      </div>
    </div>
  );
}
