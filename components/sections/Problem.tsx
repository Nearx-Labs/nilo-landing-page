import { KeyboardIcon, MessageSquareIcon } from "../icons";
import { Band, Feature, FeatureRow, SectionLabel } from "../ui";

export function Problem() {
  return (
    <Band>
      <SectionLabel>The problem</SectionLabel>
      <div className="mt-5 grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
        <h2 className="display-2">Crypto investing can still feel intimidating for beginners.</h2>
        <p className="lead max-w-[46ch]">
          Too many options, confusing terms, and no undo button. Nilo starts with what you know and explains each step
          in plain language.
        </p>
      </div>
      <div className="mt-14">
        <FeatureRow>
          <div className="lg:col-span-2">
            <Feature icon={<MessageSquareIcon width={16} height={16} />} title="Too many options, too little guidance">
              Without knowing where to start, many people give up or invest on a hunch. Nilo asks questions first, then
              makes suggestions.
            </Feature>
          </div>
          <div className="lg:col-span-2">
            <Feature icon={<KeyboardIcon width={16} height={16} />} title="There is no undo for a wrong click">
              Blockchain transactions cannot be reversed. Nilo shows you what you are about to sign, checked against the
              transaction, before anything leaves your wallet.
            </Feature>
          </div>
        </FeatureRow>
      </div>
    </Band>
  );
}
