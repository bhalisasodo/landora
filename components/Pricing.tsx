"use client";

import { pricingSection, getWhatsAppUrl } from "@/lib/copy";
import ScrollReveal from "@/components/motion/ScrollReveal";
import CountUpPrice from "@/components/motion/CountUpPrice";
import MagneticPill from "@/components/motion/MagneticPill";

export default function Pricing() {
  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-get-started"));
    }
  };

  return (
    <section
      id="pricing"
      className="mx-auto max-w-4xl px-6 py-36 text-center sm:px-8 sm:py-48 lg:py-56"
    >
      <ScrollReveal delay={0}>
        <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-signal">
          {pricingSection.eyebrow}
        </p>
      </ScrollReveal>

      {/* Hero Price Number: Dominant, Monumental, Precision Animated */}
      <ScrollReveal delay={120} className="mt-8">
        <div className="font-display text-6xl font-medium tracking-tight text-ink sm:text-7xl md:text-8xl lg:text-[5.75rem]">
          <CountUpPrice target={1450} prefix="R" />
        </div>
        <p className="mt-4 text-lg font-normal text-ink-soft sm:text-xl">
          once. Not a subscription. Not &ldquo;starting at.&rdquo; Just the price.
        </p>
      </ScrollReveal>

      {/* Includes List: Quiet, Secondary, Airy */}
      <ScrollReveal delay={240}>
        <ul className="mx-auto mt-14 max-w-md space-y-4 text-left text-sm text-ink-soft/80 sm:text-base">
          {pricingSection.includes.map((item) => (
            <li key={item} className="flex items-start gap-3.5">
              <span className="font-mono text-xs font-semibold text-signal mt-1">
                —
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </ScrollReveal>

      {/* Primary CTA: Magnetic Precision Pill */}
      <ScrollReveal delay={360} className="mt-14">
        <MagneticPill
          href={getWhatsAppUrl()}
          onClick={handleGetStarted}
          className="inline-block rounded-full bg-ink px-11 py-4 text-sm font-semibold tracking-tight text-cream shadow-xs transition-all duration-300 ease-out hover:bg-ink-soft hover:shadow-md cursor-pointer"
        >
          {pricingSection.cta}
        </MagneticPill>
      </ScrollReveal>
    </section>
  );
}
