import { KeyboardIcon, MessageSquareIcon } from "../icons";
import { Band, Feature, FeatureRow, SectionLabel } from "../ui";

export function Problem() {
  return (
    <Band>
      <SectionLabel>O problema</SectionLabel>
      <div className="mt-5 grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
        <h2 className="display-2">Investir em cripto ainda assusta quem está começando.</h2>
        <p className="lead max-w-[46ch]">
          Muita opção, termos difíceis e nenhum botão de desfazer. O Nilo começa pelo que você sabe e explica cada passo
          em palavras simples.
        </p>
      </div>
      <div className="mt-14">
        <FeatureRow>
          <div className="lg:col-span-2">
            <Feature icon={<MessageSquareIcon width={16} height={16} />} title="Muita opção, pouca orientação">
              Sem saber por onde começar, muita gente desiste ou investe no palpite. O Nilo pergunta primeiro e só
              depois sugere.
            </Feature>
          </div>
          <div className="lg:col-span-2">
            <Feature icon={<KeyboardIcon width={16} height={16} />} title="Um clique errado não tem volta">
              Na blockchain não existe estorno. Por isso o Nilo mostra o que você vai assinar, conferido com a
              transação, antes de qualquer coisa sair da sua carteira.
            </Feature>
          </div>
        </FeatureRow>
      </div>
    </Band>
  );
}
