import { Band, SectionHead } from "../ui";

const GUARANTEES = [
  {
    title: "A IA só lê sua mensagem.",
    text: "Ela entende o que você quer e devolve um pedido organizado. Nunca vê suas chaves nem monta a transação.",
  },
  {
    title: "Você lê antes de assinar.",
    text: "O resumo vem da própria transação e é conferido com o que você escolheu. Se não bater, o Nilo avisa para não assinar.",
  },
  {
    title: "As chaves ficam com você.",
    text: "Você assina na sua carteira: Freighter, Albedo ou uma carteira Pollar por e-mail ou Google. O Nilo só conhece seu endereço público.",
  },
  {
    title: "Preços de verdade, não da IA.",
    text: "Os valores vêm do Reflector, o oráculo de preços da Stellar. A IA nunca inventa um número.",
  },
];

export function Trust() {
  return (
    <Band id="trust">
      <SectionHead
        label="Por que confiar"
        tone="ok"
        title="Você no controle, do começo ao fim."
        lead="O bot sugere e executa. Quem decide e assina é sempre você."
      />
      <div className="mt-14 grid border-t border-line sm:mt-16 md:grid-cols-2">
        {GUARANTEES.map((g, index) => (
          <article
            key={g.title}
            className={`min-w-0 border-b border-line py-9 md:py-11 ${index % 2 === 0 ? "md:pr-12" : "md:border-l md:pl-12"}`}
          >
            <h3 className="title-3">{g.title}</h3>
            <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-muted">{g.text}</p>
          </article>
        ))}
      </div>
    </Band>
  );
}
