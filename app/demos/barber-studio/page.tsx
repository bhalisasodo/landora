"use client";

import { useState } from "react";
import DemoHeaderBar from "@/components/demos/DemoHeaderBar";

const barbers = [
  { id: "any", name: "First Available Chair", role: "Fastest Booking" },
  { id: "thabo", name: "Thabo M.", role: "Master Barber (Fades & Beard)" },
  { id: "devin", name: "Devin K.", role: "Senior Stylist (Scissors & Texture)" },
];

const services = [
  {
    id: "fade-style",
    name: "Signature Fade & Style",
    duration: "40 min",
    price: 260,
    tag: "Popular",
    desc: "Precision skin fade or taper, hot towel finish, and custom matte clay styling.",
  },
  {
    id: "beard-towel",
    name: "Beard Sculpt & Hot Towel",
    duration: "25 min",
    price: 180,
    tag: "Clean Cut",
    desc: "Straight razor lineup, hot towel steam, organic beard butter massage.",
  },
  {
    id: "executive-combo",
    name: "The Executive Cut + Beard Combo",
    duration: "60 min",
    price: 390,
    tag: "Best Value",
    desc: "Full fade & scissor cut, beard sculpt, double hot towel, and cold splash finish.",
  },
  {
    id: "buzz-outline",
    name: "Quick Buzz & Clean Outline",
    duration: "20 min",
    price: 160,
    tag: "Quick",
    desc: "Single-guard clipper cut with straight-edge neck and temple lineup.",
  },
];

const addOnsList = [
  {
    id: "beard-oil-steam",
    name: "Aromatherapy Beard Steam",
    price: 60,
    desc: "Eucalyptus hot towel steam + Cedarwood beard oil infusion",
  },
  {
    id: "scalp-treatment",
    name: "Invigorating Tea Tree Scalp Scrub",
    price: 80,
    desc: "Deep follicle cleanse, exfoliating scrub & cooling scalp tonic",
  },
];

const slots = [
  { day: "Today", time: "14:15", status: "Available" },
  { day: "Today", time: "15:30", status: "1 slot left" },
  { day: "Today", time: "17:00", status: "Available" },
  { day: "Tomorrow", time: "10:30", status: "Available" },
  { day: "Tomorrow", time: "12:00", status: "Available" },
];

export default function BarberStudioDemo() {
  const [selectedBarber, setSelectedBarber] = useState(barbers[0].id);
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState(slots[0]);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const activeService =
    services.find((s) => s.id === selectedServiceId) || services[0];
  const activeBarber =
    barbers.find((b) => b.id === selectedBarber) || barbers[0];

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addOnsTotal = selectedAddOns.reduce((sum, addOnId) => {
    const item = addOnsList.find((a) => a.id === addOnId);
    return sum + (item ? item.price : 0);
  }, 0);

  const totalPrice = activeService.price + addOnsTotal;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;
    setIsBooked(true);
  };

  const chosenAddOnsText =
    selectedAddOns.length > 0
      ? selectedAddOns
          .map((id) => addOnsList.find((a) => a.id === id)?.name)
          .filter(Boolean)
          .join(", ")
      : "";

  const whatsAppText = [
    `Hi The District Barber Club!`,
    ``,
    `I'd like to lock in a chair appointment:`,
    `• Service: ${activeService.name} (R${activeService.price})`,
    chosenAddOnsText ? `• Add-ons: ${chosenAddOnsText} (+R${addOnsTotal})` : null,
    `• Total: R${totalPrice}`,
    `• Barber: ${activeBarber.name}`,
    `• Slot: ${selectedSlot.day} @ ${selectedSlot.time}`,
    `• Name: ${clientName}`,
    `• Phone: ${clientPhone}`,
    ``,
    `Please confirm my chair reservation!`,
  ]
    .filter(Boolean)
    .join("\n");

  const whatsAppUrl = `https://wa.me/27820000000?text=${encodeURIComponent(
    whatsAppText
  )}`;

  return (
    <div className="min-h-screen bg-[#14120E] text-[#F5F2EB] antialiased">
      <DemoHeaderBar currentSlug="barber-studio" />

      {/* Header & Hero Photography */}
      <header className="border-b border-[#2C271E] bg-[#1A1813] px-6 pt-12 pb-10 sm:pt-16 sm:pb-14">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-[#C27803]">
            114 Kloof Street • Gardens, Cape Town
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium italic sm:text-5xl text-[#F5F2EB]">
            The District Barber Club
          </h1>
          <p className="mt-3 text-base text-[#C2BDB1] leading-relaxed">
            Precision skin fades, hot towel shaves &amp; beard tailoring. Zero wait times.
          </p>

          {/* Trust badges */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 font-mono text-xs text-[#9E9789]">
            <span className="rounded-full bg-[#14120E] border border-[#2C271E] px-3 py-1 text-[#C27803]">
              ★ 4.9 (340+ verified cuts)
            </span>
            <span className="rounded-full bg-[#14120E] border border-[#2C271E] px-3 py-1">
              Espresso &amp; Craft Beer on Tap
            </span>
          </div>

          {/* Hero Photography Card */}
          <div className="mt-8 overflow-hidden rounded-3xl border border-[#2C271E] shadow-2xl">
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#1A1813]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/demos/barber.jpg"
                alt="The District Barber Club interior styling chairs"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-xl px-6 py-12 pb-32">
        {/* Step 1: Select Barber */}
        <section className="rounded-3xl border border-[#2C271E] bg-[#1A1813] p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C27803]">
              1. Choose Barber
            </h2>
            <span className="font-mono text-xs text-[#9E9789]">Chair Assignment</span>
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            {barbers.map((b) => {
              const isSelected = selectedBarber === b.id;
              return (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setSelectedBarber(b.id)}
                  className={`rounded-2xl border p-3.5 text-left transition-all cursor-pointer ${
                    isSelected
                      ? "border-[#C27803] bg-[#C27803]/20 text-[#F5F2EB] shadow-xs ring-1 ring-[#C27803]/40"
                      : "border-[#332D22] bg-[#14120E] text-[#C2BDB1] hover:border-[#524939]"
                  }`}
                >
                  <div className="text-xs font-semibold text-[#F5F2EB]">{b.name}</div>
                  <div className="mt-0.5 text-[10px] text-[#9E9789]">{b.role}</div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Step 2: Select Cut & Grooming Service */}
        <section className="mt-8 rounded-3xl border border-[#2C271E] bg-[#1A1813] p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C27803]">
              2. Select Service
            </h2>
            <span className="font-mono text-xs text-[#9E9789]">ZAR Pricing</span>
          </div>

          <div className="mt-4 space-y-3">
            {services.map((s) => {
              const isSelected = selectedServiceId === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedServiceId(s.id)}
                  className={`w-full rounded-2xl border p-4 text-left transition-all cursor-pointer ${
                    isSelected
                      ? "border-[#C27803] bg-[#C27803]/15 ring-2 ring-[#C27803]/30 shadow-xs"
                      : "border-[#332D22] bg-[#14120E] text-[#C2BDB1] hover:border-[#524939]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-[#F5F2EB]">
                          {s.name}
                        </span>
                        {s.tag && (
                          <span className="rounded-full bg-[#C27803]/20 border border-[#C27803]/30 px-2 py-0.5 font-mono text-[9px] font-semibold text-[#C27803]">
                            {s.tag}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-[#9E9789] leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-mono text-sm font-bold text-[#C27803]">
                        R{s.price}
                      </div>
                      <div className="font-mono text-[10px] text-[#9E9789]">
                        {s.duration}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Optional Add-ons */}
          <div className="mt-6 border-t border-[#2C271E] pt-5">
            <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-[#9E9789]">
              Optional Chair Add-ons
            </h3>
            <div className="mt-3 space-y-2">
              {addOnsList.map((item) => {
                const isChecked = selectedAddOns.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleAddOn(item.id)}
                    className={`w-full flex items-center justify-between rounded-xl border p-3 text-left transition-colors cursor-pointer ${
                      isChecked
                        ? "border-[#C27803] bg-[#C27803]/10 text-[#F5F2EB]"
                        : "border-[#332D22] bg-[#14120E] text-[#C2BDB1] hover:border-[#524939]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border text-[10px] ${
                          isChecked
                            ? "border-[#C27803] bg-[#C27803] text-[#14120E] font-bold"
                            : "border-[#524939] bg-transparent"
                        }`}
                      >
                        {isChecked && "✓"}
                      </span>
                      <div>
                        <div className="text-xs font-semibold text-[#F5F2EB]">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-[#9E9789]">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#C27803] shrink-0 ml-3">
                      +R{item.price}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Step 3: Time Slot */}
        <section className="mt-8 rounded-3xl border border-[#2C271E] bg-[#1A1813] p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C27803]">
              3. Available Chair Times
            </h2>
            <span className="font-mono text-xs text-[#1F6F4C] font-semibold">Real-Time Openings</span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {slots.map((slot, i) => {
              const isSelected =
                selectedSlot.day === slot.day && selectedSlot.time === slot.time;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`rounded-xl border py-3 px-2 text-center transition-all cursor-pointer ${
                    isSelected
                      ? "border-[#C27803] bg-[#C27803] text-[#14120E] font-bold shadow-xs"
                      : "border-[#332D22] bg-[#14120E] text-[#F5F2EB] hover:border-[#524939]"
                  }`}
                >
                  <div className="text-[11px] opacity-80">{slot.day}</div>
                  <div className="font-mono text-sm font-semibold">{slot.time}</div>
                  <div className={`mt-0.5 text-[9px] font-mono ${isSelected ? "text-[#14120E]/80" : "text-[#9E9789]"}`}>
                    {slot.status}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Step 4: Instant Reservation Form */}
        <section className="mt-8 rounded-3xl border border-[#2C271E] bg-[#1A1813] p-6 sm:p-8 shadow-xs">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C27803]">
            4. Lock In Chair
          </h2>

          {isBooked ? (
            <div className="mt-5 rounded-2xl bg-[#C27803]/20 border border-[#C27803]/50 p-6 sm:p-8 text-center animate-in fade-in duration-300">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#C27803] text-[#14120E] text-lg font-bold">
                ✓
              </div>
              <h3 className="mt-4 font-display text-2xl font-medium text-[#F5F2EB]">
                Chair Reserved, {clientName}!
              </h3>
              <p className="mt-2 text-sm text-[#C2BDB1] leading-relaxed max-w-md mx-auto">
                {activeService.name} (R{totalPrice}) with {activeBarber.name} on{" "}
                <strong>{selectedSlot.day} at {selectedSlot.time}</strong>.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-block rounded-full bg-[#C27803] px-7 py-3 text-xs font-semibold tracking-tight text-[#14120E] shadow-xs transition-all duration-300 hover:brightness-110"
                >
                  Open WhatsApp Confirmation →
                </a>
                <button
                  type="button"
                  onClick={() => setIsBooked(false)}
                  className="text-xs font-semibold text-[#9E9789] hover:text-[#F5F2EB] transition-colors py-2 px-3 cursor-pointer"
                >
                  Change details
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="barber-name"
                  className="block text-xs text-[#9E9789]"
                >
                  Your Name
                </label>
                <input
                  id="barber-name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. Liam Petersen"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[#332D22] bg-[#14120E] px-4 py-3 text-sm text-[#F5F2EB] focus:border-[#C27803] focus:ring-1 focus:ring-[#C27803] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="barber-phone"
                  className="block text-xs text-[#9E9789]"
                >
                  WhatsApp / Mobile Number
                </label>
                <input
                  id="barber-phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="e.g. 084 555 1234"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[#332D22] bg-[#14120E] px-4 py-3 text-sm text-[#F5F2EB] focus:border-[#C27803] focus:ring-1 focus:ring-[#C27803] focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#C27803] py-4 text-sm font-semibold tracking-tight text-[#14120E] shadow-xs transition-all duration-300 hover:brightness-110 cursor-pointer"
                >
                  Confirm Chair — R{totalPrice} ({selectedSlot.day} @ {selectedSlot.time})
                </button>
                <p className="mt-3 text-center text-xs text-[#9E9789]">
                  Pay at shop via Card, SnapScan or Cash • 15-minute chair hold
                </p>
              </div>
            </form>
          )}
        </section>

        {/* The District Standards Card */}
        <section className="mt-12 rounded-3xl border border-[#2C271E] bg-[#1A1813] p-8 text-center">
          <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#C27803]">
            The District Club Standard
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[#C2BDB1]">
            Every cut includes a straight razor neckline cleanup, essential oil hot towel steam, and a complimentary single malt or flat white.
          </p>
        </section>
      </main>

      {/* Sticky Mobile Bar */}
      {!isBooked && (
        <div className="fixed bottom-0 left-0 right-0 border-t border-[#2C271E] bg-[#14120E]/95 p-4 backdrop-blur-md sm:hidden z-40">
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("barber-name");
              el?.focus();
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full rounded-full bg-[#C27803] py-3 text-center text-sm font-semibold text-[#14120E] shadow-xs cursor-pointer"
          >
            Lock In Chair — R{totalPrice} ({selectedSlot.time})
          </button>
        </div>
      )}
    </div>
  );
}
