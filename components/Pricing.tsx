"use client";

import { pricingSection, getWhatsAppUrl } from "@/lib/copy";
import ScrollReveal from "@/components/motion/ScrollReveal";
import CountUpPrice from "@/components/motion/CountUpPrice";
import MagneticPill from "@/components/motion/MagneticPill";

export default function Pricing() {
  const handleRequestAudit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-get-started", {
          detail: { focus: "Leak Audit Diagnostic" },
        })
      );
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

      {/* 
        Primary Prominent Price: Studio fixes start from that price
      */}
      <ScrollReveal delay={120} className="mt-8">
        <div className="flex items-baseline justify-center gap-2 sm:gap-3 font-display tracking-tight text-ink">
          <span className="text-3xl font-light text-ink-soft sm:text-4xl md:text-5xl lg:text-6xl">
            From
          </span>
          <span className="text-6xl font-medium sm:text-7xl md:text-8xl lg:text-[5.75rem]">
            <CountUpPrice target={pricingSection.startingPrice} prefix="R" />
          </span>
        </div>
        <p className="mt-4 font-mono text-xs uppercase tracking-wider text-signal sm:text-sm">
          {pricingSection.startingPriceLabel}
        </p>
      </ScrollReveal>

      {/* 
        Secondary Line: Fixes quoted after free audit
      */}
      <ScrollReveal delay={200} className="mt-6">
        <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-ink sm:text-xl">
          {pricingSection.secondaryLine}
        </p>
      </ScrollReveal>

      {/* Includes List: Quiet, Airy */}
      <ScrollReveal delay={280}>
        <ul className="mx-auto mt-14 max-w-lg space-y-4 text-left text-sm text-ink-soft/85 sm:text-base">
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
        <div className="inline-flex flex-col items-center gap-3">
          <MagneticPill
            href={getWhatsAppUrl({ leakFocus: "Leak Audit" })}
            onClick={handleRequestAudit}
            className="inline-block rounded-full bg-ink px-11 py-4 text-sm font-semibold tracking-tight text-cream shadow-xs transition-all duration-300 ease-out hover:bg-ink-soft hover:shadow-md cursor-pointer"
          >
            {pricingSection.cta}
          </MagneticPill>
          <p className="font-mono text-[11px] text-ink-soft/60">
            Priced in Rand (ZAR) • 100% free diagnostic audit • Fixes start from R1650
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
