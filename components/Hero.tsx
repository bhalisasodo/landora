"use client";

import Link from "next/link";
import { hero } from "@/lib/copy";
import ScrollReveal from "@/components/motion/ScrollReveal";
import MagneticPill from "@/components/motion/MagneticPill";

export default function Hero() {
  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-get-started"));
    }
  };

  return (
    <section
      id="top"
      className="hero-glow relative flex min-h-[82vh] flex-col justify-center px-6 py-32 sm:py-44 lg:py-52 text-center"
    >
      <div className="mx-auto max-w-4xl">
        {/* Step 1: Headline lands first with 400ms duration */}
        <ScrollReveal delay={60} duration={400} offset={16}>
          <h1 className="font-display text-[2.75rem] font-medium italic leading-[1.06] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[5.15rem]">
            We find what's <span className="leak-mark">leaking</span> in your funnel.
            Then fix it.

          </h1>
        </ScrollReveal>

        {/* Step 2: Subhead follows ~100ms later */}
        <ScrollReveal delay={160} duration={400} offset={12}>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-normal leading-relaxed text-ink-soft sm:text-xl md:text-2xl">
            {hero.subhead}
          </p>
        </ScrollReveal>

        {/* Step 3: CTA row follows ~100ms after that */}
        <ScrollReveal delay={260} duration={400} offset={10}>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
            <MagneticPill
              href="#get-started"
              onClick={handleGetStarted}
              className="inline-block rounded-full bg-ink px-9 py-4 text-sm font-semibold tracking-tight text-cream shadow-xs transition-all duration-300 ease-out hover:bg-ink-soft hover:shadow-md cursor-pointer"
            >
              {hero.primaryCta}
            </MagneticPill>

            <Link
              href="/demos"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors duration-300 hover:text-ink"
            >
              <span>{hero.secondaryCta}</span>
              <span
                className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
