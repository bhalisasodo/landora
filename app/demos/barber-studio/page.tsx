"use client";

import { useState } from "react";
import DemoHeaderBar from "@/components/demos/DemoHeaderBar";

const barbers = [
  { id: "thabo", name: "Thabo M.", role: "Master Barber", specialties: "Skin Fades & Beard Architecture" },
  { id: "devin", name: "Devin K.", role: "Senior Stylist", specialties: "Scissor Craft, Texture & Classic Tapers" },
  { id: "any", name: "First Available Chair", role: "Fastest Chair", specialties: "Next open master barber" },
];

const timeWindows = [
  { id: "morning", label: "Morning", hours: "09:00 – 12:00", note: "Quiet coffee hours" },
  { id: "afternoon", label: "Afternoon", hours: "12:00 – 16:00", note: "Peak flow" },
  { id: "evening", label: "Late After-Work", hours: "16:00 – 19:00", note: "Cocktails & craft beer" },
];

const experienceSteps = [
  {
    step: "01",
    title: "Tailored Consultation",
    desc: "We analyze your hair density, crown swirl, and facial structure before any clipper touches your head.",
  },
  {
    step: "02",
    title: "Skin Fade & Scissor Architecture",
    desc: "Seamless blending with precision Japanese steel shears and zero-gap clippers. No rush, no hard lines.",
  },
  {
    step: "03",
    title: "Eucalyptus Hot Towel Steam",
    desc: "Warm botanical steam relaxes the facial muscles, softening beard stubble for a smooth straight-razor lineup.",
  },
  {
    step: "04",
    title: "Matte Clay & Cold Towel Finish",
    desc: "Finished with imported organic matte styling paste, cold towel pore closure, and a splash of sandalwood tonic.",
  },
];

const clientReviews = [
  {
    author: "Liam S. • Gardens",
    text: "Clicked this exact ad on Instagram last month. Booked via WhatsApp in 30 seconds. Hands down the cleanest fade in Cape Town.",
    rating: 5,
  },
  {
    author: "Zubair P. • Kloof Street",
    text: "Thabo's beard work is surgical. The hot towel and cold craft beer on arrival makes it a Friday ritual.",
    rating: 5,
  },
  {
    author: "Marc W. • Sea Point",
    text: "Most barbers charge R350+ for a standard cut without the beard. R220 for the full package is unbelievable value.",
    rating: 5,
  },
];

export default function BarberStudioDemo() {
  const [selectedBarber, setSelectedBarber] = useState(barbers[0].id);
  const [selectedWindow, setSelectedWindow] = useState(timeWindows[0].id);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [isClaimed, setIsClaimed] = useState(false);

  const activeBarber = barbers.find((b) => b.id === selectedBarber) || barbers[0];
  const activeWindow = timeWindows.find((w) => w.id === selectedWindow) || timeWindows[0];

  const handleClaimVoucher = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;
    setIsClaimed(true);
  };

  const voucherCode = "#DISTRICT-PROMO25";

  const whatsAppText = [
    `Hi The District Barber Club!`,
    ``,
    `I saw your ad and claimed my First-Visit Voucher:`,
    `• Offer: Signature Skin Fade + Hot Towel Beard Sculpt`,
    `• Promotional Rate: R220 (Save 35% — Standard R340)`,
    `• Voucher Code: ${voucherCode}`,
    `• Preferred Stylist: ${activeBarber.name}`,
    `• Arrival Window: ${activeWindow.label} (${activeWindow.hours})`,
    `• Name: ${clientName}`,
    `• Cell / WhatsApp: ${clientPhone}`,
    ``,
    `Please confirm my chair hold for this week!`,
  ].join("\n");

  const whatsAppUrl = `https://wa.me/27820000000?text=${encodeURIComponent(
    whatsAppText
  )}`;

  return (
    <div className="min-h-screen bg-[#12100C] text-[#FAF6EE] antialiased selection:bg-[#C27803] selection:text-black">
      <DemoHeaderBar currentSlug="barber-studio" />

      {/* Top Ad Urgency Banner */}
      <div className="border-b border-[#2A241A] bg-[#1E1911] px-4 py-2.5 text-center text-xs font-mono">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-3 text-[#D69E2E]">
          <span className="flex items-center gap-1.5 font-semibold">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-red-500" />
            Meta &amp; Google Ad Exclusive:
          </span>
          <span className="text-[#C5BEAF]">
            Weekly Allocation: 20 chairs • <strong className="text-amber-400 font-bold">Only 6 vouchers remaining this week</strong>
          </span>
        </div>
      </div>

      {/* Hero Ad Offer Section */}
      <header className="relative border-b border-[#2A241A] bg-gradient-to-b from-[#18140E] to-[#12100C] px-6 pt-12 pb-16 sm:pt-16 sm:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Top Archetype Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full bg-[#FEF08A]/10 border border-[#FEF08A]/30 px-3.5 py-1 font-mono text-xs font-semibold text-[#FEF08A]">
              Archetype: Paid Ad Campaign Funnel
            </span>
            <span className="rounded-full bg-white/5 border border-white/10 px-3.5 py-1 font-mono text-xs text-[#A8A193]">
              114 Kloof Street • Gardens, Cape Town
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-medium italic tracking-tight sm:text-6xl text-[#FAF6EE]">
            The First-Visit Experience: <br className="hidden sm:inline" />
            Precision Fade + Hot Towel Beard.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-[#BDB4A4] sm:text-lg leading-relaxed">
            Stop gambling with walk-in barbers. Experience Cape Town's premier grooming club with our introductory ad-exclusive value stack.
          </p>

          {/* Pricing Stack Box */}
          <div className="mx-auto mt-8 inline-flex items-center gap-4 rounded-2xl border border-[#C27803]/40 bg-[#1E1911] px-6 py-4 shadow-xl">
            <div className="text-left">
              <span className="block font-mono text-xs text-[#9E9687] line-through">
                Standard: R340
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-3xl font-extrabold text-[#FEF08A] sm:text-4xl">
                  R220
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Save 35%
                </span>
              </div>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div className="text-left text-xs font-mono text-[#C5BEAF]">
              <div>✓ Cut &amp; Skin Fade</div>
              <div>✓ Hot Towel &amp; Beard Sculpt</div>
            </div>
          </div>

          {/* Quick CTA to Form */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#claim-voucher"
              className="w-full sm:w-auto rounded-full bg-[#C27803] px-8 py-3.5 font-sans text-sm font-semibold text-black shadow-lg hover:bg-[#D69E2E] transition-all hover:scale-105"
            >
              Claim Your R220 Voucher Code →
            </a>
            <span className="font-mono text-xs text-[#8A8374]">
              ★ 4.9 from 320+ Kloof St reviews
            </span>
          </div>

        </div>
      </header>

      {/* Main Content Sections */}
      <main className="mx-auto max-w-4xl px-6 py-16 sm:py-24 space-y-24">
        {/* Section 1: The 4-Step Experience Breakdown */}
        <section>
          <div className="text-center max-w-xl mx-auto">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#C27803]">
              What&apos;s Included In Your R220 Voucher
            </p>
            <h2 className="mt-2 font-display text-3xl italic sm:text-4xl text-[#FAF6EE]">
              The 45-Minute Executive Ritual
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {experienceSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-[#2A241A] bg-[#1A1610] p-6 shadow-xs"
              >
                <span className="font-mono text-xs font-bold text-[#C27803]">
                  STEP {step.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-[#FAF6EE]">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#BDB4A4]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Master Barber Authority */}
        <section className="rounded-3xl border border-[#2A241A] bg-[#16130D] p-8 sm:p-12 shadow-xs">
          <div className="text-center max-w-xl mx-auto">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#C27803]">
              The Craft
            </p>
            <h2 className="mt-2 font-display text-3xl italic sm:text-4xl text-[#FAF6EE]">
              Meet The Masters
            </h2>
            <p className="mt-2 text-sm text-[#A8A193]">
              Select your preferred barber when claiming your promo voucher.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {barbers.map((b) => (
              <div
                key={b.id}
                onClick={() => setSelectedBarber(b.id)}
                className={`flex flex-col justify-between rounded-2xl border p-5 transition-all cursor-pointer ${
                  selectedBarber === b.id
                    ? "border-[#C27803] bg-[#221B11] shadow-lg ring-1 ring-[#C27803]"
                    : "border-[#2A241A] bg-[#1A1610] hover:border-[#C27803]/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-[#C27803] uppercase font-bold">
                      {b.role}
                    </span>
                    {selectedBarber === b.id && (
                      <span className="font-mono text-[11px] text-amber-400 font-bold">✓ Selected</span>
                    )}
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-[#FAF6EE]">
                    {b.name}
                  </h3>
                  <p className="mt-2 text-xs text-[#A8A193] leading-relaxed">
                    {b.specialties}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Interactive Voucher Claim Card */}
        <section
          id="claim-voucher"
          className="scroll-mt-24 rounded-3xl border border-[#C27803]/40 bg-gradient-to-b from-[#221B11] to-[#16130D] p-8 sm:p-12 shadow-2xl"
        >
          <div className="max-w-xl mx-auto text-center">
            <span className="rounded-full bg-[#C27803] px-3.5 py-1 font-mono text-xs font-bold text-black">
              Claim Offer: #DISTRICT-PROMO25
            </span>
            <h2 className="mt-4 font-display text-3xl italic sm:text-4xl text-[#FAF6EE]">
              Lock In Your First-Visit Chair
            </h2>
            <p className="mt-2 text-sm text-[#BDB4A4] leading-relaxed">
              Vouchers are limited to 20 weekly redemptions. Fill out below to lock your promotional rate and route directly to our WhatsApp booking desk.
            </p>
          </div>

          <form onSubmit={handleClaimVoucher} className="mx-auto mt-8 max-w-md space-y-4">
            {/* Preferred Window Picker */}
            <div>
              <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-[#A8A193]">
                Preferred Arrival Window
              </label>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {timeWindows.map((tw) => (
                  <button
                    key={tw.id}
                    type="button"
                    onClick={() => setSelectedWindow(tw.id)}
                    className={`rounded-xl border p-2.5 text-center font-mono text-xs transition-colors cursor-pointer ${
                      selectedWindow === tw.id
                        ? "border-[#C27803] bg-[#C27803]/20 text-[#FEF08A]"
                        : "border-[#2A241A] bg-[#1A1610] text-[#8A8374] hover:text-[#FAF6EE]"
                    }`}
                  >
                    <div className="font-bold">{tw.label}</div>
                    <div className="text-[10px] opacity-70">{tw.hours}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="client-name"
                className="block font-mono text-xs font-medium uppercase tracking-wider text-[#A8A193]"
              >
                Your Full Name
              </label>
              <input
                id="client-name"
                type="text"
                required
                placeholder="e.g. Michael Thorne"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[#383022] bg-[#12100C] px-4 py-3 text-sm text-[#FAF6EE] placeholder:text-neutral-600 focus:border-[#C27803] focus:ring-1 focus:ring-[#C27803] focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="client-phone"
                className="block font-mono text-xs font-medium uppercase tracking-wider text-[#A8A193]"
              >
                WhatsApp Number
              </label>
              <input
                id="client-phone"
                type="tel"
                required
                placeholder="e.g. 082 345 6789"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[#383022] bg-[#12100C] px-4 py-3 text-sm text-[#FAF6EE] placeholder:text-neutral-600 focus:border-[#C27803] focus:ring-1 focus:ring-[#C27803] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#C27803] py-4 text-sm font-semibold text-black shadow-lg transition-all hover:bg-[#D69E2E] active:scale-95 cursor-pointer"
            >
              Generate WhatsApp Voucher Pass (R220) →
            </button>

            <div className="text-center font-mono text-[11px] text-[#7A7365] space-y-0.5">
              <p>No deposit required • Pay on arrival at 114 Kloof St • Cold beverage included</p>
              <p className="text-amber-400/80">Offer applies to first-time clients only</p>
            </div>
          </form>

          {/* Success Voucher Modal */}
          {isClaimed && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs">
              <div className="max-w-md rounded-3xl border border-[#C27803]/60 bg-[#1A1610] p-7 text-center shadow-2xl">
                <span className="rounded-full bg-emerald-900/50 border border-emerald-500/40 px-3 py-1 font-mono text-xs text-emerald-400 font-bold">
                  ✓ Voucher Code Generated
                </span>
                
                <h3 className="mt-4 font-display text-2xl italic font-semibold text-[#FAF6EE]">
                  Your R220 Chair Is Reserved
                </h3>

                <div className="mt-4 rounded-2xl border border-[#C27803]/40 bg-[#12100C] p-4 text-left font-mono text-xs space-y-1.5 text-[#C5BEAF]">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Voucher Code:</span>
                    <strong className="text-[#FEF08A]">{voucherCode}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Package:</span>
                    <span className="text-white">Fade + Beard Sculpt</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rate:</span>
                    <span className="text-emerald-400 font-bold">R220 (Save 35%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Stylist:</span>
                    <span className="text-white">{activeBarber.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Window:</span>
                    <span className="text-white">{activeWindow.label} ({activeWindow.hours})</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-full bg-[#25D366] py-3.5 font-sans text-sm font-semibold text-white shadow-sm hover:bg-[#1EBE5D] transition-colors"
                  >
                    Send Voucher to WhatsApp Desk →
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsClaimed(false)}
                    className="w-full rounded-full py-2.5 font-sans text-xs text-[#8A8374] hover:text-[#FAF6EE]"
                  >
                    Adjust Booking Info
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Section 4: Kloof Street Social Proof */}
        <section>
          <div className="text-center max-w-xl mx-auto">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#C27803]">
              Kloof Street Proof
            </p>
            <h2 className="mt-2 font-display text-3xl italic sm:text-4xl text-[#FAF6EE]">
              320+ Five-Star Google Reviews
            </h2>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {clientReviews.map((r) => (
              <div
                key={r.author}
                className="rounded-2xl border border-[#2A241A] bg-[#1A1610] p-6 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="text-[#C27803] text-xs font-mono">★★★★★</div>
                  <p className="text-xs leading-relaxed text-[#BDB4A4] italic">
                    &ldquo;{r.text}&rdquo;
                  </p>
                </div>
                <p className="mt-4 font-mono text-[11px] font-semibold text-[#FAF6EE] border-t border-[#2A241A] pt-3">
                  {r.author}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Sticky Mobile Voucher Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 border-t border-[#2A241A] bg-[#16130D]/95 px-5 py-3 backdrop-blur-md sm:hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <span className="block font-mono text-[10px] text-[#A8A193] uppercase">Ad Special</span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-mono text-sm font-bold text-[#FEF08A]">R220</span>
              <span className="font-mono text-[10px] text-[#8A8374] line-through">R340</span>
            </div>
          </div>
          <a
            href="#claim-voucher"
            className="rounded-full bg-[#C27803] px-5 py-2.5 font-sans text-xs font-semibold text-black shadow-sm hover:bg-[#D69E2E]"
          >
            Claim R220 Voucher →
          </a>
        </div>
      </div>
    </div>
  );
}
