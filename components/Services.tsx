"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { servicesSection, industries } from "@/lib/copy";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function Services() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

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

  const handleInquireService = (focusName: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-get-started", { detail: { focus: focusName } })
      );
    }
  };

  const websitesService = servicesSection.services.find((s) => s.id === "websites")!;
  const lighterServices = servicesSection.services.filter((s) => s.id !== "websites");

  return (
    <section id="services" className="py-36 sm:py-48 lg:py-56 overflow-hidden">
      {/* Anchor alias for backwards compatibility */}
      <span id="fix" className="sr-only" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section Header */}
        <ScrollReveal delay={0} duration={500} offset={16} className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-signal">
            {servicesSection.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-3xl font-medium italic leading-relaxed text-ink sm:text-4xl md:text-5xl">
            {servicesSection.headline}
          </h2>
          <p className="mt-4 text-base font-normal leading-relaxed text-ink-soft sm:text-lg">
            {servicesSection.subhead}
          </p>
        </ScrollReveal>

        {/* 
          SERVICE 1: WEBSITES (Carries prominent visual weight + production demo carousel)
        */}
        <div id="service-websites" className="mt-20 scroll-mt-24">
          <ScrollReveal delay={100} duration={500} offset={14}>
            <div className="rounded-3xl border border-line/90 bg-[#FAF8F5] p-6 sm:p-10 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6 border-b border-line/60">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-signal-soft/60 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-signal">
                      Service 01 • {websitesService.badge}
                    </span>
                    <span className="font-mono text-xs text-ink-soft/60">
                      Plugs: The {websitesService.leakCategory} Leak
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                    {websitesService.name}
                  </h3>
                  <p className="mt-2 font-display text-lg italic text-signal">
                    &ldquo;{websitesService.supportingLine}&rdquo;
                  </p>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink-soft">
                    {websitesService.whatWeDo}
                  </p>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-3 shrink-0">
                  <span className="rounded-full bg-cream-dim px-3 py-1 font-mono text-xs font-medium text-ink-soft">
                    {currentIndex + 1} / {industries.length}
                  </span>
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
                className="mt-8 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                style={{ scrollPaddingLeft: "0.5rem" }}
              >
                {industries.map((industry) => (
                  <div
                    key={industry.slug}
                    className="w-[82vw] sm:w-[320px] md:w-[340px] shrink-0 snap-start flex flex-col justify-between rounded-2xl border border-line/70 bg-white p-4 shadow-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:border-signal/30 hover:shadow-md"
                  >
                    <div>
                      <Link
                        href={`/demos/${industry.slug}`}
                        className="group/card block overflow-hidden rounded-xl bg-cream-dim/40"
                        aria-label={`View live ${industry.label} booking demo`}
                      >
                        <div className="relative aspect-[4/5] w-full overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={industry.image}
                            alt={`${industry.label} single-link booking demo preview`}
                            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.04]"
                            loading="lazy"
                          />
                          <div className="absolute top-3 left-3 rounded-full bg-ink/80 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-cream backdrop-blur-xs">
                            {industry.label}
                          </div>
                        </div>
                      </Link>

                      <div className="mt-4">
                        <h4 className="font-display text-xl font-medium tracking-tight text-ink">
                          {industry.label}
                        </h4>
                        <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-ink-soft/90">
                          {industry.leakLine}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 border-t border-line/60 pt-3">
                      <Link
                        href={`/demos/${industry.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-signal transition-colors duration-200 hover:text-ink"
                      >
                        <span>Open live booking demo</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* View all demos footer link */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-line/60 pt-4">
                <p className="font-mono text-xs text-ink-soft/70">
                  3 live vertical builds • Mobile-native with WhatsApp instant routing
                </p>
                <Link
                  href="/demos"
                  className="group inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-signal transition-colors hover:text-ink"
                >
                  <span>View All Website Demos</span>
                  <span
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 
          SERVICES 2, 3, 4: ADS, SEO, CONTENT & SOCIAL
          Punchy, lighter cards with leak framing + what we do + CTA
        */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {lighterServices.map((service, index) => (
            <ScrollReveal
              key={service.id}
              delay={150 + index * 80}
              duration={450}
              offset={14}
            >
              <div
                id={`service-${service.id}`}
                className="group flex h-full flex-col justify-between rounded-3xl border border-line/80 bg-[#FAF8F5] p-6 sm:p-8 shadow-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:border-signal/30 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-signal-soft/50 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-signal">
                      Service 0{index + 2}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink-soft/60">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-ink">
                    {service.name}
                  </h3>

                  {/* One-line leak framing */}
                  <div className="mt-3 rounded-xl bg-white/70 p-3 border border-line/50">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-signal font-semibold">
                      Plugs {service.leakCategory} Leak:
                    </p>
                    <p className="mt-1 text-xs italic text-ink-soft">
                      &ldquo;{service.leakLine}&rdquo;
                    </p>
                  </div>

                  {/* One-line what we do */}
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    {service.whatWeDo}
                  </p>
                </div>

                <div className="mt-8 border-t border-line/60 pt-4">
                  <button
                    type="button"
                    onClick={handleInquireService(service.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-signal transition-colors duration-200 hover:text-ink cursor-pointer"
                  >
                    <span>{service.cta}</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
