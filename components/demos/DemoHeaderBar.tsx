"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DemoHeaderBarProps {
  currentSlug:
    | "restaurant-cafe"
    | "fitness-studio"
    | "barber-studio";
}

const demoOptions = [
  {
    slug: "restaurant-cafe",
    title: "Restaurant & Cafe",
    archetype: "Booking-First Landing Page",
    niche: "Table 9 Bistro",
    accent: "#D8A76B",
    accentBg: "#332D24",
    studioFix: "Websites (The Dead End Fix)",
    whyItConverts: [
      "Replaces annoying PDF menu downloads with instant party size & dinner time slot selection.",
      "Zero deposit required removes friction during high-intent dining and reservation browsing.",
      "Instant WhatsApp table confirmation guarantees high attendance rates with direct chat handoff.",
    ],
  },
  {
    slug: "fitness-studio",
    title: "Fitness Studio / Gym",
    archetype: "High-Conversion Website",
    niche: "Forge Reformer Pilates",
    accent: "#0066FF",
    accentBg: "#EBF2FF",
    studioFix: "Websites & Conversion Architecture",
    whyItConverts: [
      "Multi-section website structure builds brand prestige, coach credentials, and studio tour clarity.",
      "Transparent ZAR membership tiers & intro week pass eliminates slow 'enquiry form' drop-offs.",
      "Low-friction 7-day trial pass lead capture routes high-intent prospects directly into WhatsApp.",
    ],
  },
  {
    slug: "barber-studio",
    title: "Barber & Grooming Club",
    archetype: "Paid Ad Campaign Funnel",
    niche: "The District Barber Club",
    accent: "#C27803",
    accentBg: "#FEF08A",
    studioFix: "Paid Acquisition (The Ghost Traffic Fix)",
    whyItConverts: [
      "Dedicated Meta & Google ad promo page prevents paid traffic from bouncing off an unoptimized homepage.",
      "Compelling introductory offer (Save 35% on First Cut + Beard Sculpt) with real weekly chair limits.",
      "Instant voucher code generator routes directly into WhatsApp for rapid chair reservation.",
    ],
  },
];

export default function DemoHeaderBar({ currentSlug }: DemoHeaderBarProps) {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showInsights, setShowInsights] = useState(false);

  const activeDemo =
    demoOptions.find((d) => d.slug === currentSlug) || demoOptions[0];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0E1114]/95 px-4 py-2.5 backdrop-blur-md text-xs text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
          {/* Left: Indicator & Demo Switcher */}
          <div className="flex items-center gap-3">
            <div className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: activeDemo.accent }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ backgroundColor: activeDemo.accent }}
              />
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => setShowDropdown(!showDropdown)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide text-white hover:bg-white/15 transition-colors cursor-pointer"
              >
                <span>Demo: <strong className="text-cream">{activeDemo.title}</strong></span>
                <span className="text-white/60 text-[9px]">{showDropdown ? "▲" : "▼"}</span>
              </button>

              {/* Demo Switcher Dropdown */}
              {showDropdown && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowDropdown(false)}
                  />
                  <div className="absolute left-0 mt-2 z-50 w-60 rounded-2xl border border-white/15 bg-[#171A1E] p-2 shadow-2xl backdrop-blur-xl">
                    <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-white/50">
                      Switch Live Demo
                    </div>
                    {demoOptions.map((item) => {
                      const isCurrent = item.slug === currentSlug;
                      return (
                        <Link
                          key={item.slug}
                          href={`/demos/${item.slug}`}
                          onClick={() => setShowDropdown(false)}
                          className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-xs transition-colors ${
                            isCurrent
                              ? "bg-white/15 font-semibold text-white"
                              : "text-white/80 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <div>
                            <p>{item.title}</p>
                            <p className="text-[10px] text-white/50">{item.archetype}</p>
                          </div>
                          {isCurrent && (
                            <span className="font-mono text-[10px] text-signal font-bold">
                              Active
                            </span>
                          )}
                        </Link>
                      );
                    })}
                    <div className="mt-1 border-t border-white/10 pt-1">
                      <Link
                        href="/demos"
                        onClick={() => setShowDropdown(false)}
                        className="block rounded-xl px-3 py-2 text-center text-[11px] font-mono text-white/70 hover:bg-white/10 hover:text-white"
                      >
                        ← View all 3 demos overview
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Why This Converts Trigger */}
            <button
              type="button"
              onClick={() => setShowInsights(true)}
              className="hidden sm:inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
            >
              <span>💡 Why this converts</span>
            </button>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowInsights(true)}
              className="sm:hidden text-[11px] text-white/80 underline underline-offset-4 cursor-pointer"
            >
              Why it converts
            </button>

            <Link
              href="/"
              className="flex items-center gap-1.5 font-mono text-[11px] text-white/70 hover:text-white transition-colors"
            >
              <img
                src="/landora-mark-reversed.svg"
                alt="Landora"
                width={16}
                height={16}
                className="h-4 w-auto object-contain"
              />
              ← Landora
            </Link>

            <Link
              href="/#get-started"
              className="hidden sm:inline-block rounded-full bg-signal px-3.5 py-1 text-[11px] font-semibold text-cream shadow-xs transition-transform duration-200 hover:scale-105"
            >
              Request Audit
            </Link>
          </div>
        </div>
      </header>

      {/* Why This Converts Modal / Popover */}
      {showInsights && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs"
            onClick={() => setShowInsights(false)}
          />

          <div className="relative z-10 w-full max-w-lg rounded-3xl border border-white/20 bg-[#16181C] p-6 text-white shadow-2xl sm:p-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-signal">
                  Conversion Architecture Breakdown
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium italic text-cream">
                  {activeDemo.title} Single-Link Blueprint
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowInsights(false)}
                className="rounded-full p-2 text-white/60 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-white/70">
              Notice what is missing on this page: no navigation menus, no 5-click subpages, no dead-end PDFs, and no unmonitored contact forms. Every pixel guides the user to a single conversion action.
            </p>

            <div className="mt-6 space-y-3">
              {activeDemo.whyItConverts.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal text-[11px] font-mono font-bold text-cream">
                    {index + 1}
                  </span>
                  <p className="text-xs text-white/90 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-5">
              <span className="font-mono text-xs text-white/60">
                Studio Fix: <strong>Websites &amp; Landing Pages</strong>
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setShowInsights(false)}
                  className="flex-1 sm:flex-none rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/10 cursor-pointer"
                >
                  Explore Demo
                </button>
                <Link
                  href="/#get-started"
                  onClick={() => setShowInsights(false)}
                  className="flex-1 sm:flex-none rounded-full bg-signal px-5 py-2 text-xs font-semibold text-cream text-center shadow-xs hover:brightness-110"
                >
                  Request Audit →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
