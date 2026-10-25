import { InvestmentWalkthrough } from "../InvestmentWalkthrough";
import { Band, SectionHead } from "../ui";

export function HowItWorks() {
  return (
    <Band id="how-it-works">
      <SectionHead
        label="Como funciona"
        tone="accent"
        title="Do primeiro “oi” ao investimento feito."
        lead={
          <>
            <strong>Clique pelas etapas.</strong> Quatro passos, e você só decide o que importa: qual sugestão escolher
            e quando assinar.
          </>
        }
      />
      <div className="mt-12 sm:mt-16">
        <InvestmentWalkthrough />
      </div>
      <p className="mt-12 max-w-[70ch] border-t border-line pt-6 text-sm text-muted">
        Se o que você vai assinar não bater com o que você escolheu, o Nilo avisa:{" "}
        <span className="font-medium text-bad">não assine</span>.
      </p>
    </Band>
  );
}
