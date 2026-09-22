"use client";

import { useState, useEffect } from "react";
import { contactConfig, getWhatsAppUrl, pricingSection } from "@/lib/copy";

const leakOptions = [
  { id: "all", label: "Full Pipeline / Not Sure" },
  { id: "website", label: "Website (Dead End)" },
  { id: "ads", label: "Paid Ads (Ghost Traffic)" },
  { id: "seo", label: "Organic Search (Buried Alive)" },
  { id: "retention", label: "Retention (Cold Trail)" },
];

export default function GetStartedDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [leakFocus, setLeakFocus] = useState(leakOptions[0].label);
  const [phone, setPhone] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ focus?: string }>;
      if (customEvent.detail?.focus) {
        const matching = leakOptions.find((opt) =>
          customEvent.detail?.focus?.toLowerCase().includes(opt.id)
        );
        if (matching) {
          setLeakFocus(matching.label);
        }
      }
      setIsOpen(true);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("open-get-started", handleOpen);
    window.addEventListener("keydown", handleKeyDown);

    // Hash listener for direct anchor linking e.g. /#get-started
    const checkHash = () => {
      if (window.location.hash === "#get-started") {
        setIsOpen(true);
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("open-get-started", handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappUrl = getWhatsAppUrl({
      name,
      businessName,
      leakFocus,
      phone,
      url,
    });
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
      className="fixed inset-0 z-50 flex justify-end"
    >
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-ink/65 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
      />

      {/* Drawer Content */}
      <div className="relative z-10 flex h-full w-full max-w-lg flex-col justify-between overflow-y-auto bg-cream p-8 shadow-2xl transition-transform duration-400 ease-out sm:p-10 border-l border-line/80 animate-in slide-in-from-right duration-300">
        <div>
          {/* Header & Close Button */}
          <div className="flex items-start justify-between">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-signal">
                Landora Studio • Step 01
              </p>
              <h2
                id="drawer-title"
                className="mt-3 font-display text-3xl font-medium italic text-ink sm:text-4xl"
              >
                Request a Leak Audit
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 text-ink-soft hover:bg-cream-dim transition-colors cursor-pointer"
              aria-label="Close drawer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Tell us about your business. We&apos;ll diagnose where your revenue is leaking across your website, ads, search, and social before anything gets built or bought.
          </p>

          {/* Pricing Highlight Pill */}
          <div className="mt-6 flex items-center justify-between rounded-2xl bg-signal-soft/50 border border-signal/20 px-5 py-3 text-xs">
            <span className="font-medium text-ink">Diagnostic Leak Audit</span>
            <span className="font-mono font-bold text-signal">100% Free • Fixes from R1650</span>
          </div>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            {/* Suspected Leak Area */}
            <div>
              <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-ink-soft">
                Where do you suspect you&apos;re leaking?
              </label>
              <div className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {leakOptions.map((opt) => {
                  const isSelected = leakFocus === opt.label;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setLeakFocus(opt.label)}
                      className={`rounded-xl border py-2.5 px-3 text-left text-xs transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "border-signal bg-signal text-cream font-medium shadow-xs"
                          : "border-line bg-white/70 text-ink hover:border-ink/30"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Business Name */}
            <div>
              <label
                htmlFor="drawer-biz-name"
                className="block font-mono text-xs font-semibold uppercase tracking-wider text-ink-soft"
              >
                Business Name
              </label>
              <input
                id="drawer-biz-name"
                type="text"
                required
                placeholder="e.g. Cape Roastery / Apex Physio"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/40 transition-shadow focus:border-signal focus:ring-2 focus:ring-signal/20 focus:outline-none"
              />
            </div>

            {/* Your Name */}
            <div>
              <label
                htmlFor="drawer-name"
                className="block font-mono text-xs font-semibold uppercase tracking-wider text-ink-soft"
              >
                Your Name
              </label>
              <input
                id="drawer-name"
                type="text"
                required
                autoComplete="name"
                placeholder="e.g. Thabo Mthembu"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/40 transition-shadow focus:border-signal focus:ring-2 focus:ring-signal/20 focus:outline-none"
              />
            </div>

            {/* WhatsApp / Cell */}
            <div>
              <label
                htmlFor="drawer-phone"
                className="block font-mono text-xs font-semibold uppercase tracking-wider text-ink-soft"
              >
                WhatsApp / Cell Number
              </label>
              <input
                id="drawer-phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="e.g. 082 345 6789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/40 transition-shadow focus:border-signal focus:ring-2 focus:ring-signal/20 focus:outline-none"
              />
            </div>

            {/* Current Website or Instagram */}
            <div>
              <label
                htmlFor="drawer-url"
                className="block font-mono text-xs font-semibold uppercase tracking-wider text-ink-soft"
              >
                Current Website or Instagram <span className="font-normal lowercase opacity-70">(optional)</span>
              </label>
              <input
                id="drawer-url"
                type="text"
                placeholder="e.g. instagram.com/mybrand or yoursite.co.za"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/40 transition-shadow focus:border-signal focus:ring-2 focus:ring-signal/20 focus:outline-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full rounded-full bg-ink py-4 text-sm font-semibold tracking-tight text-cream shadow-xs transition-all duration-300 hover:bg-ink-soft hover:shadow-md active:scale-[0.99] cursor-pointer"
              >
                Request Free Leak Audit via WhatsApp →
              </button>
            </div>
          </form>
        </div>

        {/* Footer info */}
        <div className="mt-8 border-t border-line/60 pt-6 text-center">
          <p className="font-mono text-xs text-ink-soft/70">
            Priced in Rand (ZAR) • 100% free diagnostic audit • Fixes start from R1650
          </p>
          <p className="mt-3 text-xs text-ink-soft/70">
            Prefer email?{" "}
            <a
              href={`mailto:${contactConfig.email}`}
              className="font-medium text-signal underline underline-offset-4 transition-colors hover:text-ink"
            >
              {contactConfig.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
