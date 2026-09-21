"use client";

import { useState } from "react";
import DemoHeaderBar from "@/components/demos/DemoHeaderBar";

const partySizes = [
  { label: "2 Guests", note: "Table for two" },
  { label: "4 Guests", note: "Standard booth" },
  { label: "6 Guests", note: "Banquette" },
  { label: "8+ Guests", note: "Large party" },
];

const timeSlots = [
  { time: "18:00", note: "Early Bird" },
  { time: "19:30", note: "Prime Seating" },
  { time: "20:45", note: "Prime Seating" },
  { time: "21:30", note: "Late Night" },
];

const seatingAreas = [
  { id: "inside", label: "Indoor Dining Room" },
  { id: "courtyard", label: "Covered Courtyard" },
  { id: "bar", label: "High-Top Bar Counter" },
];

const menuHighlights = [
  {
    name: "Wood-Fired Saldanha Mussels",
    price: "R185",
    desc: "Cape white wine, garlic confit broth, house sourdough.",
  },
  {
    name: "Karoo Lamb Rump",
    price: "R265",
    desc: "Smoked aubergine, mint salsa verde, red wine jus.",
  },
  {
    name: "Charred Leeks & Stracciatella",
    price: "R140",
    desc: "Toasted hazelnuts, herb oil, 12-year aged balsamic.",
  },
];

export default function RestaurantCafeDemo() {
  const [selectedParty, setSelectedParty] = useState(partySizes[0].label);
  const [selectedTime, setSelectedTime] = useState(timeSlots[1].time);
  const [selectedArea, setSelectedArea] = useState(seatingAreas[0].label);
  const [specialNotes, setSpecialNotes] = useState("");
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestPhone) return;
    setIsBooked(true);
  };

  const whatsAppText = [
    `Hi Table 9 Bistro!`,
    ``,
    `I'd like to reserve a table tonight:`,
    `• Party: ${selectedParty}`,
    `• Time: ${selectedTime}`,
    `• Seating: ${selectedArea}`,
    specialNotes ? `• Notes: ${specialNotes}` : "",
    `• Name: ${guestName}`,
    `• Phone: ${guestPhone}`,
    ``,
    `Please confirm our table reservation.`,
  ]
    .filter(Boolean)
    .join("\n");

  const whatsAppUrl = `https://wa.me/27820000000?text=${encodeURIComponent(
    whatsAppText
  )}`;

  return (
    <div className="min-h-screen bg-[#14120F] text-[#F5F1E8] antialiased">
      <DemoHeaderBar currentSlug="restaurant-cafe" />

      {/* Header & Hero Photography */}
      <header className="border-b border-[#2C2822] bg-[#1A1713] px-6 pt-12 pb-10 sm:pt-16 sm:pb-14">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-[#D8A76B]">
            87 Bree Street • Cape Town CBD
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium italic sm:text-5xl text-[#F5F1E8]">
            Table 9 Bistro &amp; Wine Bar
          </h1>
          <p className="mt-3 text-base text-[#C4BDB0] leading-relaxed">
            Wood-fired seasonal plates &amp; low-intervention Cape wines.
          </p>
          
          {/* Service details */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 font-mono text-xs text-[#9E9585]">
            <span className="rounded-full bg-[#332D24] border border-[#D8A76B]/40 px-3 py-1 font-semibold text-[#D8A76B]">
              Archetype: Booking-First Landing Page
            </span>
            <span className="rounded-full bg-[#14120F] border border-[#2C2822] px-3 py-1 text-[#D8A76B]">
              Dinner: Tue–Sun from 17:30
            </span>
            <span className="rounded-full bg-[#14120F] border border-[#2C2822] px-3 py-1">
              No Deposit Required
            </span>
          </div>

          {/* Hero Photography Card */}
          <div className="mt-8 overflow-hidden rounded-3xl border border-[#2C2822] shadow-2xl">
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#14120F]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/demos/restaurant.jpg"
                alt="Table 9 Bistro candlelit evening dining table"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-xl px-6 py-12 pb-32">
        {/* Step 1: Party Size */}
        <section className="rounded-3xl border border-[#2C2822] bg-[#1A1713] p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#D8A76B]">
              1. Party Size
            </h2>
            <span className="font-mono text-xs text-[#9E9585]">Tonight's Dinner</span>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {partySizes.map((party) => {
              const isSelected = selectedParty === party.label;
              return (
                <button
                  key={party.label}
                  type="button"
                  onClick={() => setSelectedParty(party.label)}
                  className={`rounded-xl border py-3 px-2 text-center transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border-[#D8A76B] bg-[#D8A76B] text-[#14120F] font-bold shadow-xs"
                      : "border-[#332D24] bg-[#14120F] text-[#F5F1E8] hover:border-[#5A5144]"
                  }`}
                >
                  <div className="text-sm font-semibold">{party.label}</div>
                  <div className={`text-[10px] ${isSelected ? "text-[#14120F]/80" : "text-[#9E9585]"}`}>
                    {party.note}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Step 2: Time Slot & Seating Area */}
        <section className="mt-8 rounded-3xl border border-[#2C2822] bg-[#1A1713] p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#D8A76B]">
              2. Choose Seating Tonight
            </h2>
            <span className="font-mono text-xs text-[#1F6F4C] font-semibold">Live Availability</span>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {timeSlots.map((slot) => {
              const isSelected = selectedTime === slot.time;
              return (
                <button
                  key={slot.time}
                  type="button"
                  onClick={() => setSelectedTime(slot.time)}
                  className={`rounded-xl border py-3 px-2 text-center transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border-[#1F6F4C] bg-[#1F6F4C] text-white font-bold shadow-xs"
                      : "border-[#332D24] bg-[#14120F] text-[#F5F1E8] hover:border-[#5A5144]"
                  }`}
                >
                  <div className="font-mono text-sm font-semibold">{slot.time}</div>
                  <div className={`text-[10px] ${isSelected ? "text-[#A7D8BA]" : "text-[#9E9585]"}`}>
                    {slot.note}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Seating Area Preference */}
          <div className="mt-6 border-t border-[#2C2822] pt-5">
            <label className="block font-mono text-xs font-medium uppercase tracking-wider text-[#9E9585]">
              Seating Preference
            </label>
            <div className="mt-2.5 grid grid-cols-3 gap-2">
              {seatingAreas.map((area) => {
                const isSelected = selectedArea === area.label;
                return (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => setSelectedArea(area.label)}
                    className={`rounded-xl border py-2 px-2 text-center text-xs transition-all cursor-pointer ${
                      isSelected
                        ? "border-[#D8A76B] bg-[#D8A76B]/20 text-[#D8A76B] font-semibold"
                        : "border-[#332D24] bg-[#14120F] text-[#C4BDB0] hover:border-[#5A5144]"
                    }`}
                  >
                    {area.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Step 3: Instant Confirmation */}
        <section className="mt-8 rounded-3xl border border-[#2C2822] bg-[#1A1713] p-6 sm:p-8 shadow-xs">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#D8A76B]">
            3. Reserve Table
          </h2>

          {isBooked ? (
            <div className="mt-5 rounded-2xl bg-[#1F6F4C]/20 border border-[#1F6F4C]/50 p-6 sm:p-8 text-center animate-in fade-in duration-300">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#1F6F4C] text-white text-lg font-bold">
                ✓
              </div>
              <h3 className="mt-4 font-display text-2xl font-medium text-[#F5F1E8]">
                Table Reserved, {guestName}!
              </h3>
              <p className="mt-2 text-sm text-[#C4BDB0] leading-relaxed max-w-md mx-auto">
                {selectedParty} • Tonight at <strong>{selectedTime}</strong> ({selectedArea}).
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
                  className="text-xs font-semibold text-[#9E9585] hover:text-[#F5F1E8] transition-colors py-2 px-3 cursor-pointer"
                >
                  Change Reservation
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="bistro-name"
                  className="block text-xs text-[#9E9585]"
                >
                  Reservation Name
                </label>
                <input
                  id="bistro-name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. David Ndlovu"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[#332D24] bg-[#14120F] px-4 py-3 text-sm text-[#F5F1E8] focus:border-[#D8A76B] focus:ring-1 focus:ring-[#D8A76B] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="bistro-phone"
                  className="block text-xs text-[#9E9585]"
                >
                  WhatsApp / Mobile Number
                </label>
                <input
                  id="bistro-phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="e.g. 071 987 6543"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[#332D24] bg-[#14120F] px-4 py-3 text-sm text-[#F5F1E8] focus:border-[#D8A76B] focus:ring-1 focus:ring-[#D8A76B] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="bistro-notes"
                  className="block text-xs text-[#9E9585]"
                >
                  Dietary / Special Requests (Optional)
                </label>
                <input
                  id="bistro-notes"
                  type="text"
                  placeholder="e.g. Anniversary celebration, vegetarian options"
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[#332D24] bg-[#14120F] px-4 py-3 text-sm text-[#F5F1E8] focus:border-[#D8A76B] focus:ring-1 focus:ring-[#D8A76B] focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#1F6F4C] py-4 text-sm font-semibold tracking-tight text-white shadow-xs transition-all duration-300 hover:bg-[#18593c] cursor-pointer"
                >
                  Reserve Table Tonight ({selectedTime} • {selectedParty})
                </button>
                <p className="mt-3 text-center text-xs text-[#9E9585]">
                  Instant WhatsApp/SMS confirmation • Table held for 15 min
                </p>
              </div>
            </form>
          )}
        </section>

        {/* Chef Highlights */}
        <section className="mt-10">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#9E9585]">
            Tonight's Highlights
          </h2>
          <div className="mt-4 divide-y divide-[#2C2822] rounded-2xl border border-[#2C2822] bg-[#1A1713] px-5 shadow-xs">
            {menuHighlights.map((item) => (
              <div key={item.name} className="py-4 flex justify-between gap-4">
                <div>
                  <h3 className="text-sm font-medium text-[#F5F1E8]">{item.name}</h3>
                  <p className="mt-0.5 text-xs text-[#9E9585]">{item.desc}</p>
                </div>
                <div className="font-mono text-sm font-semibold text-[#D8A76B] shrink-0">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Sticky Mobile Bar */}
      {!isBooked && (
        <div className="fixed bottom-0 left-0 right-0 border-t border-[#2C2822] bg-[#14120F]/95 p-4 backdrop-blur-md sm:hidden z-40">
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("bistro-name");
              el?.focus();
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full rounded-full bg-[#1F6F4C] py-3 text-center text-sm font-semibold text-white shadow-xs cursor-pointer"
          >
            Reserve Table Tonight ({selectedTime})
          </button>
        </div>
      )}
    </div>
  );
}
