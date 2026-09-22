import ScrollReveal from "@/components/motion/ScrollReveal";

export default function SelfAssessment() {
  return (
    <section id="self-assessment" className="border-y border-line/60 bg-cream-dim/35 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_auto] lg:gap-20">
        <ScrollReveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-signal">
            Free client self-assessment
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-medium italic leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl">
            Find the five leaks costing you bookings.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            A practical, no-jargon check you can run on your own phone in under ten minutes. See where customers are dropping off before you spend another rand on traffic.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120} className="lg:min-w-[270px]">
          <a
            href="/landora-client-self-assessment.pdf"
            download="landora-client-self-assessment.pdf"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-semibold tracking-tight text-cream shadow-xs transition-all duration-300 hover:bg-ink-soft hover:shadow-md sm:w-auto"
          >
            <span>Download the free PDF</span>
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-y-0.5">
              ↓
            </span>
          </a>
          <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft/60">
            Instant download • No email required
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}