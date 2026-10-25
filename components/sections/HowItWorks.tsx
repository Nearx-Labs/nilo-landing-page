import { APP_URL } from "@/lib/demo";
import { InvestmentWalkthrough } from "../InvestmentWalkthrough";
import { ChevronIcon } from "../icons";
import { Band, PrimaryButton, SectionHead } from "../ui";

export function HowItWorks() {
  return (
    <Band id="how-it-works">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <SectionHead
          label="How it works"
          tone="accent"
          title="From your first “hello” to an investment made."
          lead={
            <>
              <strong>Click through the steps.</strong> Four steps, and you decide what matters: which suggestion to choose
              and when to sign.
            </>
          }
        />
        <div className="self-start lg:shrink-0 lg:self-auto">
          <PrimaryButton href={APP_URL} external emphasized>
            Open Nilo <ChevronIcon width={18} height={18} />
          </PrimaryButton>
        </div>
      </div>
      <div className="mt-12 sm:mt-16">
        <InvestmentWalkthrough />
      </div>
      <p className="mt-12 max-w-[70ch] border-t border-line pt-6 text-sm text-muted">
        If what you are about to sign does not match your choice, Nilo will warn you: <span className="font-medium text-bad">do not sign</span>.
      </p>
    </Band>
  );
}
