"use client";

import { useState } from "react";
import DemoHeaderBar from "@/components/demos/DemoHeaderBar";

const treatments = [
  {
    id: "deep-tissue",
    name: "Deep Tissue Muscle Release",
    duration: "60 min",
    price: 680,
    tag: "Most Popular",
    desc: "Targeted firm pressure to dissolve chronic tension, stiffness, and postural strain.",
  },
  {
    id: "botanical-facial",
    name: "Organic Botanical Glow Facial",
    duration: "60 min",
    price: 750,
    tag: "Signature",
    desc: "Cape fynbos botanical extracts, enzyme peel, and intense cellular hydration.",
  },
  {
    id: "hot-stone",
    name: "Hot Stone Balance & Recovery",
    duration: "90 min",
    price: 980,
    tag: "Restorative",
    desc: "Warmed volcanic basalt stones and essential oils for whole-body neuromuscular decompression.",
  },
];

const availableAddOns = [
  { id: "aroma", name: "Aromatherapy Infusion", price: 120, desc: "Custom blended lavender & eucalyptus oils" },
  { id: "scalp", name: "Heated Scalp Massage", price: 180, desc: "15 min tension release with warm argan oil" },
];

const availableSlots = [
  { day: "Today", time: "15:00", spots: "1 slot left" },
  { day: "Today", time: "16:30", spots: "2 slots left" },
  { day: "Tomorrow", time: "10:00", spots: "Available" },
  { day: "Tomorrow", time: "14:00", spots: "Available" },
];

export default function SpaWellnessDemo() {
  const [selectedTreatmentId, setSelectedTreatmentId] = useState(treatments[0].id);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState(availableSlots[0]);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const activeTreatment =
    treatments.find((t) => t.id === selectedTreatmentId) || treatments[0];

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addOnTotal = selectedAddOns.reduce((sum, id) => {
    const addOn = availableAddOns.find((a) => a.id === id);
    return sum + (addOn?.price || 0);
  }, 0);

  const totalPrice = activeTreatment.price + addOnTotal;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;
    setIsBooked(true);
  };

  const activeAddOnNames = selectedAddOns
    .map((id) => availableAddOns.find((a) => a.id === id)?.name)
    .filter(Boolean);

  const whatsAppText = [
    `Hi Aura Botanica Spa!`,
    ``,
    `I'd like to book an appointment:`,
    `• Treatment: ${activeTreatment.name} (R${activeTreatment.price})`,
    activeAddOnNames.length > 0
      ? `• Add-ons: ${activeAddOnNames.join(", ")} (+R${addOnTotal})`
      : "",
    `• Total: R${totalPrice}`,
    `• Preferred Slot: ${selectedSlot.day} @ ${selectedSlot.time}`,
    `• Name: ${clientName}`,
    `• Phone: ${clientPhone}`,
    ``,
    `Please confirm my booking.`,
  ]
    .filter(Boolean)
    .join("\n");

  const whatsAppUrl = `https://wa.me/27820000000?text=${encodeURIComponent(
    whatsAppText
  )}`;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1B18] antialiased">
      <DemoHeaderBar currentSlug="spa-wellness" />

      {/* Header & Hero Photography */}
      <header className="border-b border-[#EAE3D6] bg-white px-6 pt-12 pb-10 sm:pt-16 sm:pb-14">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-[#7A7164]">
            142 Kloof Street • Gardens, Cape Town
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium italic sm:text-5xl text-[#14120F]">
            Aura Botanica Spa
          </h1>
          <p className="mt-3 text-base text-[#6B6255] leading-relaxed">
            Restorative bodywork &amp; botanical facials. One tap to book your quiet hour.
          </p>

          {/* Trust badges */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 font-mono text-xs text-[#7A7164]">
            <span className="rounded-full bg-[#FAF8F5] border border-[#E8E2D5] px-3 py-1">
              ★ 4.9 (210+ verified reviews)
            </span>
            <span className="rounded-full bg-[#FAF8F5] border border-[#E8E2D5] px-3 py-1">
              Card / SnapScan on arrival
            </span>
          </div>

          {/* Hero Photography Card */}
          <div className="mt-8 overflow-hidden rounded-3xl border border-[#E8E2D5] shadow-xs">
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#FAF8F5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/demos/spa.jpg"
                alt="Aura Botanica Spa peaceful treatment room"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-xl px-6 py-12 pb-32">
        {/* Step 1: Select Treatment */}
        <section>
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#7A7164]">
              1. Choose Treatment
            </h2>
            <span className="font-mono text-xs text-[#7A7164]">ZAR Pricing</span>
          </div>

          <div className="mt-4 space-y-3">
            {treatments.map((t) => {
              const isSelected = t.id === selectedTreatmentId;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedTreatmentId(t.id)}
                  className={`w-full rounded-2xl border p-5 text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border-[#1F6F4C] bg-[#F3F8F5] ring-2 ring-[#1F6F4C]/40 shadow-xs"
                      : "border-[#E8E2D5] bg-white hover:border-[#CDC4B3]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-base text-[#14120F]">{t.name}</span>
                        {t.tag && (
                          <span className="rounded-full bg-[#EBF5EE] px-2 py-0.5 font-mono text-[10px] font-semibold text-[#1F6F4C]">
                            {t.tag}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-[#6B6255] leading-relaxed">{t.desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-mono text-base font-bold text-[#1F6F4C]">
                        R{t.price}
                      </div>
                      <div className="font-mono text-[11px] text-[#7A7164]">
                        {t.duration}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Optional Add-ons */}
        <section className="mt-8 rounded-2xl border border-[#E8E2D5] bg-white p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#7A7164]">
              Optional Add-ons
            </h3>
            <span className="font-mono text-[11px] text-[#7A7164]">Upgrade your session</span>
          </div>

          <div className="mt-3 space-y-2">
            {availableAddOns.map((addOn) => {
              const isChecked = selectedAddOns.includes(addOn.id);
              return (
                <button
                  key={addOn.id}
                  type="button"
                  onClick={() => toggleAddOn(addOn.id)}
                  className={`w-full flex items-center justify-between rounded-xl border p-3 text-left transition-all cursor-pointer ${
                    isChecked
                      ? "border-[#1F6F4C] bg-[#F3F8F5]"
                      : "border-[#E8E2D5]/70 hover:border-[#CDC4B3]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded border text-[10px] ${
                        isChecked
                          ? "border-[#1F6F4C] bg-[#1F6F4C] text-white"
                          : "border-[#CDC4B3] bg-white"
                      }`}
                    >
                      {isChecked ? "✓" : ""}
                    </span>
                    <div>
                      <span className="text-xs font-medium text-[#14120F]">
                        {addOn.name}
                      </span>
                      <span className="block text-[10px] text-[#7A7164]">
                        {addOn.desc}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#1F6F4C]">
                    +R{addOn.price}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Step 2: Slot Selection */}
        <section className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#7A7164]">
              2. Select Available Slot
            </h2>
            <span className="font-mono text-xs text-[#1F6F4C] font-medium">Real-Time Openings</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {availableSlots.map((slot, i) => {
              const isSelected =
                selectedSlot.day === slot.day && selectedSlot.time === slot.time;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`rounded-xl border py-3 px-2 text-center transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border-[#1F6F4C] bg-[#1F6F4C] text-white shadow-xs"
                      : "border-[#E8E2D5] bg-white text-[#1E1B18] hover:border-[#CDC4B3]"
                  }`}
                >
                  <div className="text-[11px] opacity-80">{slot.day}</div>
                  <div className="font-mono text-sm font-semibold">{slot.time}</div>
                  <div className={`mt-0.5 text-[9px] font-mono ${isSelected ? "text-white/80" : "text-[#7A7164]"}`}>
                    {slot.spots}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Step 3: Fast Details */}
        <section className="mt-10 rounded-3xl border border-[#E8E2D5] bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#7A7164]">
              3. Instant Reservation
            </h2>
            <span className="font-mono text-xs font-bold text-[#1F6F4C]">
              Total: R{totalPrice}
            </span>
          </div>

          {isBooked ? (
            <div className="mt-5 rounded-2xl bg-[#F3F8F5] border border-[#1F6F4C]/30 p-6 sm:p-8 text-center animate-in fade-in duration-300">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#1F6F4C] text-white text-lg font-bold">
                ✓
              </div>
              <h3 className="mt-4 font-display text-2xl font-medium text-[#14120F]">
                Slot Reserved, {clientName}!
              </h3>
              <p className="mt-2 text-sm text-[#6B6255] leading-relaxed max-w-md mx-auto">
                {activeTreatment.name} reserved for <strong>{selectedSlot.day} at {selectedSlot.time}</strong> (Total: R{totalPrice}).
              </p>
              
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-block rounded-full bg-[#1F6F4C] px-7 py-3 text-xs font-semibold tracking-tight text-white shadow-xs transition-all duration-300 hover:bg-[#18593c]"
                >
                  Open WhatsApp Confirmation →
                </a>
                <button
                  type="button"
                  onClick={() => setIsBooked(false)}
                  className="text-xs font-semibold text-[#7A7164] hover:text-[#14120F] transition-colors py-2 px-3 cursor-pointer"
                >
                  Change details
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="spa-name"
                  className="block text-xs font-medium text-[#7A7164]"
                >
                  Your Name
                </label>
                <input
                  id="spa-name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. Sarah van der Merwe"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[#E8E2D5] px-4 py-3 text-sm focus:border-[#1F6F4C] focus:ring-1 focus:ring-[#1F6F4C] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="spa-phone"
                  className="block text-xs font-medium text-[#7A7164]"
                >
                  WhatsApp / Phone Number
                </label>
                <input
                  id="spa-phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="e.g. 082 123 4567"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[#E8E2D5] px-4 py-3 text-sm focus:border-[#1F6F4C] focus:ring-1 focus:ring-[#1F6F4C] focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#1F6F4C] py-4 text-sm font-semibold tracking-tight text-white shadow-xs transition-all duration-300 hover:bg-[#18593c] cursor-pointer"
                >
                  Confirm Booking — R{totalPrice} ({selectedSlot.day} @ {selectedSlot.time})
                </button>
                <p className="mt-3 text-center text-xs text-[#7A7164]">
                  Pay at venue via Card or SnapScan • Free cancellation up to 4 hrs before
                </p>
              </div>
            </form>
          )}
        </section>
      </main>

      {/* Sticky Mobile Bar */}
      {!isBooked && (
        <div className="fixed bottom-0 left-0 right-0 border-t border-[#E8E2D5] bg-white/95 p-4 backdrop-blur-md sm:hidden z-40">
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("spa-name");
              el?.focus();
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full rounded-full bg-[#1F6F4C] py-3 text-center text-sm font-semibold text-white shadow-xs cursor-pointer"
          >
            Book {activeTreatment.name.split(" ")[0]} (R{totalPrice})
          </button>
        </div>
      )}
    </div>
  );
}
