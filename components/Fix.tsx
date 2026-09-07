"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { fixSection, industries } from "@/lib/copy";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function Fix() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Approximate active card index
    const cardWidth = 360;
    const index = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(Math.min(Math.max(index, 0), industries.length - 1));
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = 380;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="fix" className="py-36 sm:py-48 lg:py-56 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Centered single thought */}
        <ScrollReveal delay={0} duration={500} offset={16} className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-signal">
            {fixSection.eyebrow}
          </p>
          <h2 className="mt-6 font-display text-2xl font-normal italic leading-relaxed text-ink sm:text-3xl md:text-4xl">
            {fixSection.body}
          </h2>
        </ScrollReveal>

        {/* Carousel Header & Controls */}
        <div className="mt-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-signal uppercase tracking-wider">
              Explore Live Demos
            </span>
            <span className="rounded-full bg-cream-dim px-2.5 py-0.5 font-mono text-[10px] font-medium text-ink-soft">
              {currentIndex + 1} / {industries.length}
            </span>
          </div>

          {/* Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              className={`flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-all cursor-pointer ${
                canScrollLeft
                  ? "hover:bg-ink hover:text-cream shadow-xs"
                  : "opacity-40 cursor-not-allowed"
              }`}
              aria-label="Scroll carousel left"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              className={`flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-all cursor-pointer ${
                canScrollRight
                  ? "hover:bg-ink hover:text-cream shadow-xs"
                  : "opacity-40 cursor-not-allowed"
              }`}
              aria-label="Scroll carousel right"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={carouselRef}
        className="mt-8 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 sm:px-8 max-w-7xl mx-auto pb-8 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollPaddingLeft: "1.5rem" }}
      >
        {industries.map((industry, index) => (
          <div
            key={industry.slug}
            className="w-[85vw] sm:w-[350px] md:w-[380px] shrink-0 snap-start flex flex-col justify-between rounded-3xl border border-line/80 bg-[#FAF8F5] p-5 shadow-xs transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-ink/20 hover:shadow-xl"
          >
            <div>
              <Link
                href={`/demos/${industry.slug}`}
                className="group/card block overflow-hidden rounded-2xl bg-cream-dim/40"
                aria-label={`View live ${industry.label} booking demo`}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={industry.image}
                    alt={`${industry.label} single-link booking demo preview`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-ink/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cream backdrop-blur-xs">
                    {industry.label}
                  </div>
                </div>
              </Link>

              <div className="mt-6">
                <h3 className="font-display text-2xl font-medium tracking-tight text-ink">
                  {industry.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {industry.leakLine}
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-line/60 pt-4">
              <Link
                href={`/demos/${industry.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-signal transition-colors duration-200 hover:text-ink"
              >
                <span>Open live booking demo</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary Bottom Navigation Link */}
      <div className="mt-12 text-center">
        <Link
          href="/demos"
          className="group inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-signal transition-colors duration-200 hover:text-ink"
        >
          <span>{fixSection.demoCta} (All 5 Verticals)</span>
          <span
            className="transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
