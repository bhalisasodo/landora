"use client";

import { closeSection, getWhatsAppUrl } from "@/lib/copy";
import ScrollReveal from "@/components/motion/ScrollReveal";
import MagneticPill from "@/components/motion/MagneticPill";

export default function Close() {
  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-get-started"));
    }
  };

  return (
    <section className="bg-ink py-40 text-center text-cream sm:py-52 lg:py-60">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <ScrollReveal>
          <h2 className="font-display text-4xl font-medium italic leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            {closeSection.headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150} className="mt-14">
          <MagneticPill
            href={getWhatsAppUrl()}
            onClick={handleGetStarted}
            className="inline-block rounded-full bg-signal px-10 py-4 text-sm font-semibold tracking-tight text-cream shadow-xs transition-all duration-300 ease-out hover:brightness-110 cursor-pointer"
          >
            {closeSection.cta}
          </MagneticPill>
        </ScrollReveal>
      </div>
    </section>
  );
}
