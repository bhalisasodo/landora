import { leakSection, leakArchetypes } from "@/lib/copy";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function Leak() {
  return (
    <>
      {/* 
        HERO IDEA 1: The Leak Manifesto
        Deep ink, monumental serif typography, escalating staggered rhythm.
      */}
      <section className="bg-ink py-36 text-cream sm:py-48 lg:py-56">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          {/* Eyebrow lands first ahead of content */}
          <ScrollReveal delay={0} duration={350} offset={10}>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-signal">
              {leakSection.eyebrow}
            </p>
          </ScrollReveal>

          {/* Staggered escalating paragraphs (120ms apart) */}
          <div className="mt-12 space-y-12 sm:space-y-16">
            {leakSection.body.map((line, index) => (
              <ScrollReveal
                key={line}
                delay={80 + index * 120}
                duration={500}
                offset={16}
                className="max-w-3xl"
              >
                <p
                  className={`font-display text-2xl font-normal italic leading-[1.3] sm:text-3xl md:text-4xl lg:text-[2.65rem] ${
                    index === leakSection.body.length - 1
                      ? "text-cream font-medium"
                      : "text-cream/85"
                  }`}
                >
                  {line}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 
        HERO IDEA 2: Named Funnel Leaks
        Separated into its own spacious section with subtle staggered reveals.
      */}
      <section className="border-t border-cream/[0.08] bg-[#0E0D0A] py-32 text-cream sm:py-44 lg:py-52">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <ScrollReveal delay={0} duration={400} offset={12} className="max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-cream/40">
              The 5 Named Funnel Leaks
            </p>
            <h2 className="mt-4 font-display text-3xl font-normal italic text-cream sm:text-4xl">
              Where the drop-off actually happens.
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leakArchetypes.map((leak, index) => (
              <ScrollReveal
                key={leak.name}
                delay={60 + index * 70}
                duration={450}
                offset={14}
                className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:border-signal/40 hover:bg-white/[0.05] hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 font-mono text-xs font-semibold text-signal transition-colors duration-300 group-hover:bg-signal group-hover:text-cream">
                      0{index + 1}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-white/30 group-hover:text-signal transition-colors">
                      Leak #{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-medium tracking-tight text-cream group-hover:text-white transition-colors">
                    {leak.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-cream/65 group-hover:text-cream/85 transition-colors">
                    {leak.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
