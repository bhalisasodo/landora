"use client";

import { useState } from "react";
import DemoHeaderBar from "@/components/demos/DemoHeaderBar";

type ClassItem = {
  id: string;
  time: string;
  name: string;
  instructor: string;
  intensity: string;
  spotsLeft: number;
};

const scheduleData: Record<string, ClassItem[]> = {
  Today: [
    {
      id: "cls-1",
      time: "06:30",
      name: "Sunrise Reformer Burn",
      instructor: "Nandi M.",
      intensity: "High Energy",
      spotsLeft: 3,
    },
    {
      id: "cls-2",
      time: "12:15",
      name: "Lunch Express Sculpt (40 min)",
      instructor: "Nandi M.",
      intensity: "Full Body",
      spotsLeft: 2,
    },
    {
      id: "cls-3",
      time: "17:30",
      name: "Sunset Athletic Reformer",
      instructor: "Zoe D.",
      intensity: "Core & Glutes",
      spotsLeft: 4,
    },
  ],
  Tomorrow: [
    {
      id: "cls-4",
      time: "07:00",
      name: "Morning Power Reformer",
      instructor: "Zoe D.",
      intensity: "Full Body & Cardio",
      spotsLeft: 5,
    },
    {
      id: "cls-5",
      time: "12:15",
      name: "Core Align & Lengthen",
      instructor: "Thabo K.",
      intensity: "Deep Core",
      spotsLeft: 3,
    },
    {
      id: "cls-6",
      time: "18:00",
      name: "High-Tempo Athletic Reformer",
      instructor: "Thabo K.",
      intensity: "High Energy",
      spotsLeft: 1,
    },
  ],
  Saturday: [
    {
      id: "cls-7",
      time: "08:30",
      name: "Weekend Warrior Reformer",
      instructor: "Nandi M.",
      intensity: "Intense Sculpt",
      spotsLeft: 2,
    },
    {
      id: "cls-8",
      time: "10:00",
      name: "Reformer Flow & Restore",
      instructor: "Zoe D.",
      intensity: "Recovery & Tone",
      spotsLeft: 6,
    },
  ],
};

const days = ["Today", "Tomorrow", "Saturday"];

export default function FitnessStudioDemo() {
  const [selectedDay, setSelectedDay] = useState("Today");
  const currentClasses = scheduleData[selectedDay] || scheduleData["Today"];
  const [selectedClassId, setSelectedClassId] = useState(currentClasses[0]?.id || "cls-1");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const selectedClass =
    currentClasses.find((c) => c.id === selectedClassId) || currentClasses[0];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsBooked(true);
  };

  const whatsAppText = [
    `Hi Forge Pilates!`,
    ``,
    `I'd like to claim my intro pass spot:`,
    `• Day: ${selectedDay}`,
    `• Class: ${selectedClass.name} at ${selectedClass.time}`,
    `• Instructor: ${selectedClass.instructor}`,
    `• Rate: R150 First-Timer Pass (50% Off)`,
    `• Name: ${name}`,
    `• Phone: ${phone}`,
    ``,
    `Please confirm my reformer spot!`,
  ].join("\n");

  const whatsAppUrl = `https://wa.me/27820000000?text=${encodeURIComponent(
    whatsAppText
  )}`;

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#12161A] antialiased">
      <DemoHeaderBar currentSlug="fitness-studio" />

      {/* Header & Hero Photography */}
      <header className="border-b border-[#E1E5EA] bg-white px-6 pt-12 pb-10 sm:pt-16 sm:pb-14">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-[#0052CC]">
            The Firs • Rosebank, Johannesburg
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium italic sm:text-5xl text-[#12161A]">
            Forge Reformer Pilates
          </h1>
          <p className="mt-3 text-base text-[#525F6E] leading-relaxed">
            High-intensity athletic reformer sessions. Feel stronger in 45 minutes.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#EBF2FF] border border-[#BFD7FF] px-4 py-1.5 font-mono text-xs font-semibold text-[#0052CC]">
            <span>🎁 First-Timer Offer: R150 Trial (Save 50%)</span>
          </div>

          {/* Hero Photography Card */}
          <div className="mt-8 overflow-hidden rounded-3xl border border-[#E1E5EA] shadow-xs">
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#F8F9FA]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/demos/fitness.jpg"
                alt="Forge Reformer Pilates sunlit boutique studio"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-xl px-6 py-12 pb-32">
        {/* Step 1: Select Day & Session */}
        <section>
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#525F6E]">
              1. Choose Schedule
            </h2>
            <span className="font-mono text-xs text-[#0052CC] font-medium">Rosebank Studio</span>
          </div>

          {/* Day Switcher Tabs */}
          <div className="mt-4 flex rounded-2xl bg-[#E1E5EA]/60 p-1.5">
            {days.map((day) => {
              const isDayActive = selectedDay === day;
              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => {
                    setSelectedDay(day);
                    const firstCls = scheduleData[day]?.[0];
                    if (firstCls) setSelectedClassId(firstCls.id);
                  }}
                  className={`flex-1 rounded-xl py-2 text-center text-xs font-semibold transition-all cursor-pointer ${
                    isDayActive
                      ? "bg-white text-[#12161A] shadow-xs"
                      : "text-[#525F6E] hover:text-[#12161A]"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <div className="mt-4 space-y-3">
            {currentClasses.map((c) => {
              const isSelected = c.id === selectedClassId;

              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedClassId(c.id)}
                  className={`w-full rounded-2xl border p-5 text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border-[#0066FF] bg-[#F0F5FF] ring-2 ring-[#0066FF]/40 shadow-xs"
                      : "border-[#E1E5EA] bg-white hover:border-[#BDC7D1]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-base font-bold text-[#12161A]">
                          {c.time}
                        </span>
                        <span className="text-base font-semibold text-[#12161A]">
                          {c.name}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center gap-2 text-xs text-[#525F6E]">
                        <span>Coach: {c.instructor}</span>
                        <span>•</span>
                        <span className="font-mono text-[11px] text-[#0052CC]">{c.intensity}</span>
                      </div>
                    </div>
                    <div>
                      <span className="rounded-full bg-[#E6F8EE] px-3 py-1 font-mono text-xs font-bold text-[#1F6F4C]">
                        {c.spotsLeft} {c.spotsLeft === 1 ? "spot" : "spots"} left
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Step 2: Instant Booking Form */}
        <section className="mt-10 rounded-3xl border border-[#E1E5EA] bg-white p-6 sm:p-8 shadow-xs">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#525F6E]">
            2. Claim Your Intro Spot
          </h2>

          {isBooked ? (
            <div className="mt-5 rounded-2xl bg-[#E6F8EE]/70 border border-[#A7D8BA] p-6 sm:p-8 text-center animate-in fade-in duration-300">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#1F6F4C] text-white text-lg font-bold">
                ✓
              </div>
              <h3 className="mt-4 font-display text-2xl font-medium text-[#12161A]">
                Spot Claimed, {name}!
              </h3>
              <p className="mt-2 text-sm text-[#525F6E] leading-relaxed max-w-md mx-auto">
                {selectedClass.name} ({selectedDay} @ {selectedClass.time}) reserved for <strong>R150 intro pass</strong>.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-block rounded-full bg-[#12161A] px-7 py-3 text-xs font-semibold tracking-tight text-white shadow-xs transition-all duration-300 hover:bg-[#232B33]"
                >
                  Open WhatsApp Confirmation →
                </a>
                <button
                  type="button"
                  onClick={() => setIsBooked(false)}
                  className="text-xs font-semibold text-[#525F6E] hover:text-[#12161A] transition-colors py-2 px-3 cursor-pointer"
                >
                  Book another spot
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="fit-name"
                  className="block text-xs font-medium text-[#525F6E]"
                >
                  Full Name
                </label>
                <input
                  id="fit-name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. Sipho Sithole"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[#E1E5EA] px-4 py-3 text-sm focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="fit-phone"
                  className="block text-xs font-medium text-[#525F6E]"
                >
                  WhatsApp / Cell
                </label>
                <input
                  id="fit-phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="e.g. 083 456 7890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[#E1E5EA] px-4 py-3 text-sm focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#12161A] py-4 text-sm font-semibold tracking-tight text-white shadow-xs transition-all duration-300 hover:bg-[#232B33] cursor-pointer"
                >
                  Claim {selectedClass.time} Spot — R150 Intro ({selectedDay})
                </button>
                <p className="mt-3 text-center text-xs text-[#525F6E]">
                  Free grip socks included on first visit • Lockers &amp; showers on site
                </p>
              </div>
            </form>
          )}
        </section>
      </main>

      {/* Sticky Mobile Bar */}
      {!isBooked && (
        <div className="fixed bottom-0 left-0 right-0 border-t border-[#E1E5EA] bg-white/95 p-4 backdrop-blur-md sm:hidden z-40">
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("fit-name");
              el?.focus();
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full rounded-full bg-[#12161A] py-3 text-center text-sm font-semibold text-white shadow-xs cursor-pointer"
          >
            Claim {selectedClass.time} Spot (R150)
          </button>
        </div>
      )}
    </div>
  );
}
