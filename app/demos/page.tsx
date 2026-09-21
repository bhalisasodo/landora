"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { industries } from "@/lib/copy";
import ScrollReveal from "@/components/motion/ScrollReveal";
import MagneticPill from "@/components/motion/MagneticPill";
import GetStartedDrawer from "@/components/GetStartedDrawer";

const demoFeatureTags: Record<string, string[]> = {
  "restaurant-cafe": [
    "Zero-Deposit Instant Table Claims",
    "No Clunky PDF Menu Downloads",
    "Pre-filled WhatsApp Booking Desk",
  ],
  "fitness-studio": [
    "High-Conversion Website Architecture",
    "Coach Authority & Live Class Schedule",
    "Instant 7-Day Intro Pass Funnel",
  ],
  "barber-studio": [
    "Dedicated Paid Ad Campaign Offer Stack",
    "35% First-Timer Discount & Scarcity Counter",
    "Instant #PROMO Voucher Lock via WhatsApp",
  ],
};

const comparisonItems = [
  {
    feature: "Time to Conversion Action",
    traditional: "3–6 clicks buried under 'About Us' and PDFs",
    landora: "Instant — offer, schedule, or table lock on-screen",
  },
  {
    feature: "Paid Ad Traffic Destination",
    traditional: "Clicks bounce off generic homepage (Ghost Traffic)",
    landora: "Dedicated promo funnels with urgency & voucher codes",
  },
  {
    feature: "Mobile Lead Delivery",
    traditional: "Contact form sent to unmonitored inbox (Cold Trail)",
    landora: "Direct, pre-filled WhatsApp handoff straight to your phone",
  },
  {
    feature: "Pricing & Service Transparency",
    traditional: "Pinch-and-zoom PDFs or vague 'enquire for price'",
    landora: "Interactive transparent ZAR rates and tier breakdowns",
  },
];

export default function DemosIndex() {
  const handleOpenDrawer = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-get-started"));
    }
  };

  return (
    <>
      <Nav />
      <main id="main-content" className="mx-auto max-w-6xl px-6 py-28 sm:px-8 sm:py-36 lg:py-44">
        {/* Header Hero */}
        <ScrollReveal className="text-center max-w-3xl mx-auto">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-signal">
            Live Conversion Archetypes
          </p>
          <h1 className="mt-6 font-display text-4xl italic tracking-tight sm:text-5xl md:text-6xl text-ink">
            Real layouts, built to plug real leaks.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft sm:text-xl leading-relaxed">
            Explore 3 live, bookable conversion engines built for South African service businesses. Each demo showcases how Landora solves specific drop-off leaks.
          </p>
        </ScrollReveal>

        {/* Demo Lineup Grid */}
        <div className="mt-24 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 lg:gap-12">
          {industries.map((ind, index) => {
            const tags = demoFeatureTags[ind.slug] || [];

            return (
              <ScrollReveal
                key={ind.slug}
                delay={index * 100}
                className="group flex flex-col justify-between rounded-3xl border border-line/80 bg-[#FAF8F5] p-5 shadow-xs transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-ink/20 hover:shadow-xl"
              >
                <div>
                  <Link
                    href={`/demos/${ind.slug}`}
                    className="block overflow-hidden rounded-2xl bg-cream-dim/40"
                    aria-label={`View live ${ind.label} booking demo`}
                  >
                    <div className="aspect-[4/5] w-full overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={ind.image}
                        alt={`${ind.label} single-link booking demo preview`}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                  </Link>

                  <div className="mt-6">
                    <div className="inline-block rounded-full bg-signal-soft/70 border border-signal/20 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-signal mb-2.5">
                      {ind.archetype}
                    </div>
                    <h2 className="font-display text-2xl font-medium tracking-tight text-ink">
                      {ind.label}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {ind.leakLine}
                    </p>

                    {/* Conversion Tags */}
                    <div className="mt-5 space-y-1.5">
                      {tags.map((tag) => (
                        <div
                          key={tag}
                          className="flex items-center gap-2 text-xs text-ink/80"
                        >
                          <span className="font-mono text-[11px] text-signal font-bold">
                            ✓
                          </span>
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-line/60 pt-5">
                  <Link
                    href={`/demos/${ind.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-signal transition-colors duration-200 hover:text-ink"
                  >
                    <span>Open live interactive demo</span>
                    <span
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* The Architecture Comparison Table */}
        <ScrollReveal delay={150} className="mt-36 rounded-3xl border border-line bg-white/70 p-8 sm:p-12 shadow-xs">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-signal">
              The Architecture Comparison
            </p>
            <h2 className="mt-3 font-display text-3xl italic tracking-tight sm:text-4xl text-ink">
              Traditional Website vs. Landora Archetypes
            </h2>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">
              Why businesses lose 60%+ of their ad and social traffic to navigation fatigue and enquiry black holes.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-line text-xs font-mono uppercase tracking-wider text-ink-soft">
                  <th className="py-4 pr-4">Dimension</th>
                  <th className="py-4 px-4 text-ink-soft/70">Traditional 5-Page Site</th>
                  <th className="py-4 pl-4 text-signal font-bold">Landora Conversion Archetypes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line/60">
                {comparisonItems.map((item) => (
                  <tr key={item.feature} className="hover:bg-cream-dim/30 transition-colors">
                    <td className="py-4 pr-4 font-semibold text-ink">{item.feature}</td>
                    <td className="py-4 px-4 text-ink-soft/80">{item.traditional}</td>
                    <td className="py-4 pl-4 font-medium text-signal">{item.landora}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        {/* Bottom Callout */}
        <ScrollReveal
          delay={200}
          className="mt-32 rounded-3xl bg-cream-dim/50 p-12 text-center sm:p-16"
        >
          <h3 className="font-display text-3xl italic sm:text-4xl text-ink">
            Need a site or campaign that actually closes?
          </h3>
          <p className="mt-4 text-base text-ink-soft max-w-xl mx-auto">
            Our diagnostic leak audit is completely free. We identify your drop-off points, then deploy the exact conversion architecture.
          </p>
          <div className="mt-8">
            <MagneticPill
              href="#get-started"
              onClick={handleOpenDrawer}
              className="inline-block rounded-full bg-ink px-10 py-4 text-sm font-semibold tracking-tight text-cream shadow-xs transition-all duration-300 hover:bg-ink-soft hover:shadow-md cursor-pointer"
            >
              Request Free Leak Audit
            </MagneticPill>
          </div>
        </ScrollReveal>
      </main>
      <Footer />
      <GetStartedDrawer />
    </>
  );
}
