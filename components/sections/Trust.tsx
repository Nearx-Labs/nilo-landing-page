import { Band, SectionHead } from "../ui";

const GUARANTEES = [
  {
    title: "AI only reads your message.",
    text: "It understands what you want and returns an organized request. It never sees your keys or builds the transaction.",
  },
  {
    title: "You review before signing.",
    text: "The summary comes from the transaction itself and is checked against your choice. If they do not match, Nilo tells you not to sign.",
  },
  {
    title: "You keep your keys.",
    text: "You sign in your wallet: Freighter, Albedo, or a Pollar wallet using email or Google. Nilo only knows your public address.",
  },
  {
    title: "Real prices, not AI estimates.",
    text: "Prices come from Reflector, Stellar’s price oracle. AI never makes up a number.",
  },
];

export function Trust() {
  return (
    <Band id="trust">
      <SectionHead
        label="Why trust Nilo"
        tone="ok"
        title="You stay in control, from start to finish."
        lead="The bot suggests and executes. You always decide and sign."
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
