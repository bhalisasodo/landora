"use client";

import { useState } from "react";
import { faqSection } from "@/lib/copy";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const whatsappFaqUrl = `https://wa.me/27820000000?text=${encodeURIComponent(
    "Hi LaunchGremlin! I have a question about the R1450 single-link build."
  )}`;

  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-32 sm:px-8 sm:py-40">
      <ScrollReveal className="text-center">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-signal">
          {faqSection.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-3xl font-medium italic tracking-tight text-ink sm:text-4xl">
          {faqSection.headline}
        </h2>
      </ScrollReveal>

      {/* Accordion List */}
      <div className="mt-16 space-y-4">
        {faqSection.items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <ScrollReveal
              key={index}
              delay={index * 60}
              duration={400}
              className="overflow-hidden rounded-2xl border border-line/80 bg-white/70 backdrop-blur-xs transition-colors duration-200 hover:border-ink/20"
            >
              <button
                type="button"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                className="flex w-full items-center justify-between p-6 text-left transition-colors cursor-pointer"
              >
                <span className="font-display text-lg font-medium text-ink sm:text-xl pr-4">
                  {item.question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream-dim text-sm text-ink transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-ink text-cream" : ""
                  }`}
                  aria-hidden="true"
                >
                  ↓
                </span>
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-6 pt-1 text-sm leading-relaxed text-ink-soft animate-in fade-in duration-300 sm:text-base"
                >
                  <p>{item.answer}</p>
                </div>
              )}
            </ScrollReveal>
          );
        })}
      </div>

      {/* Direct WhatsApp Consultation Callout */}
      <ScrollReveal delay={300} className="mt-12 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 rounded-2xl bg-signal-soft/40 border border-signal/20 px-6 py-4">
          <span className="text-xs text-ink-soft">
            Still have a specific question about your industry?
          </span>
          <a
            href={whatsappFaqUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-signal transition-colors hover:text-ink"
          >
            <span>Ask Us Directly on WhatsApp</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
