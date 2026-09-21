"use client";

import { auditSection } from "@/lib/copy";
import ScrollReveal from "@/components/motion/ScrollReveal";
import MagneticPill from "@/components/motion/MagneticPill";
import Link from "next/link";

export default function Audit() {
  const handleRequestAudit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-get-started"));
    }
  };

  return (
    <section
      id="audit"
      className="relative border-b border-line/60 bg-[#FAF7F2] py-36 sm:py-48 lg:py-56"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal delay={0} duration={400} offset={10}>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-signal">
              {auditSection.eyebrow}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100} duration={450} offset={14}>
            <h2 className="mt-5 font-display text-3xl font-medium italic leading-[1.12] tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              {auditSection.headline}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={180} duration={450} offset={12}>
            <p className="mt-6 text-base font-normal leading-relaxed text-ink-soft sm:text-lg md:text-xl">
              {auditSection.subhead}
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Core Editorial Beats — Not a spec sheet, reads like sharp copy */}
        <div className="mt-20 grid gap-8 md:grid-cols-3 md:gap-10">
          {auditSection.beats.map((beat, index) => (
            <ScrollReveal
              key={beat.number}
              delay={220 + index * 90}
              duration={450}
              offset={14}
              className="flex flex-col justify-between rounded-2xl border border-line/70 bg-white/75 p-7 shadow-xs transition-all duration-300 hover:border-ink/20 hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-signal">
                    {beat.number}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-ink-soft/60">
                    // {beat.title}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-medium tracking-tight text-ink">
                  {beat.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {beat.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Primary Page CTA */}
        <ScrollReveal delay={450} duration={400} offset={10} className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <MagneticPill
              href="#get-started"
              onClick={handleRequestAudit}
              className="inline-block rounded-full bg-ink px-11 py-4 text-sm font-semibold tracking-tight text-cream shadow-xs transition-all duration-300 ease-out hover:bg-ink-soft hover:shadow-md cursor-pointer"
            >
              {auditSection.primaryCta}
            </MagneticPill>

            <p className="font-mono text-xs text-ink-soft/70">
              {auditSection.guaranteeNote}
            </p>

            <div className="pt-2">
              <Link
                href="#services"
                className="group inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-signal transition-colors hover:text-ink"
              >
                <span>{auditSection.secondaryCta}</span>
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  ↓
                </span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
