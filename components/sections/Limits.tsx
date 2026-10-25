import { Band, SectionHead } from "../ui";

const LIMITS = [
  "Só na rede de testes (testnet) da Stellar. Nada aqui usa dinheiro de verdade.",
  "Ativos disponíveis: XLM e o USDC de teste da Circle.",
  "As sugestões são educativas. Não são recomendação financeira.",
  "O Nilo nunca guarda seus fundos: tudo fica na sua carteira.",
];

export function Limits() {
  return (
    <Band>
      <SectionHead label="Limites da v1" title="Feito num hackathon, e honesto sobre isso." />
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
