import { proofSection } from "@/lib/copy";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function Proof() {
  return (
    <section className="border-y border-line/50 bg-cream-dim/35 py-36 sm:py-48 lg:py-56">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
        {/* Step 1: One Hero Beat — Headline Lands */}
        <ScrollReveal delay={0} duration={500} offset={18}>
          <h2 className="font-display text-3xl font-medium italic leading-[1.12] text-ink sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            {proofSection.eyebrow}
          </h2>
        </ScrollReveal>

        {/* Step 2: Body Text Follows */}
        <ScrollReveal delay={120} duration={500} offset={14}>
          <p className="mt-8 text-lg font-normal leading-relaxed text-ink-soft sm:text-xl">
            {proofSection.body}
          </p>
        </ScrollReveal>

        {/* Step 3: Founding Client Actionable Callout — Subtle 98% Scale-In */}
        <ScrollReveal delay={220} duration={550} offset={10} scale={0.98}>
          <div className="mx-auto mt-14 max-w-2xl rounded-2xl bg-signal-soft/50 px-8 py-7 sm:px-10 sm:py-8 text-sm sm:text-base text-ink leading-relaxed">
            <p className="font-medium text-ink">
              {proofSection.foundingCallout}
            </p>
          </div>
        </ScrollReveal>

        {/* Step 4: Quiet Trust Line */}
        <ScrollReveal delay={340} duration={400} offset={8}>
          <p className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-ink-soft/70">
            {proofSection.trustLine}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
