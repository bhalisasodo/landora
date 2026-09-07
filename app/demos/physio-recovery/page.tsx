"use client";

import { useState } from "react";
import DemoHeaderBar from "@/components/demos/DemoHeaderBar";

const consultationTypes = [
  {
    id: "initial-assessment",
    name: "Initial Comprehensive Injury Assessment",
    duration: "60 min",
    price: 780,
    tag: "Claimable",
    desc: "Diagnostic movement screen, orthopedic testing, hands-on treatment & custom rehabilitation plan.",
  },
  {
    id: "dry-needling",
    name: "Sports Dry Needling & Deep Tissue",
    duration: "45 min",
    price: 580,
    tag: "Recovery",
    desc: "Targeted intramuscular stimulation to release severe muscle spasms and accelerate tissue recovery.",
  },
  {
    id: "post-op-rehab",
    name: "Post-Surgical Joint Rehabilitation",
    duration: "45 min",
    price: 650,
    tag: "Specialist",
    desc: "Structured mobilization, progressive load training, and guided neuromuscular re-education.",
  },
  {
    id: "compression-mobility",
    name: "Spine Mobilization & Assisted Stretch",
    duration: "30 min",
    price: 420,
    tag: "Mobility",
    desc: "Manual joint decompression, myofascial release, and assisted active mobility stretches.",
  },
];

const addOnsList = [
  {
    id: "normatec-flush",
    name: "Normatec 3 Compression Boots Flush",
    price: 150,
    desc: "30-min pneumatic lymphatic flush for heavy training legs",
  },
  {
    id: "k-tape",
    name: "Sports Kinesiology Joint Taping",
    price: 120,
    desc: "Targeted structural support for competition or weekend runs",
  },
];

const bodyAreas = [
  "Lower Back & Spine",
  "Neck & Shoulders",
  "Knee & ACL / Meniscus",
  "Ankle & Achilles",
  "Hamstring / Groin Strain",
  "General Mobility",
];

const availableSlots = [
  { day: "Today", time: "14:00", spots: "1 opening" },
  { day: "Today", time: "16:30", spots: "2 openings" },
  { day: "Tomorrow", time: "09:00", spots: "Available" },
  { day: "Tomorrow", time: "11:30", spots: "Available" },
  { day: "Tomorrow", time: "15:00", spots: "Available" },
];

export default function PhysioRecoveryDemo() {
  const [selectedConsultId, setSelectedConsultId] = useState(consultationTypes[0].id);
  const [selectedArea, setSelectedArea] = useState(bodyAreas[0]);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState(availableSlots[0]);
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [medicalAid, setMedicalAid] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const activeConsult =
    consultationTypes.find((c) => c.id === selectedConsultId) || consultationTypes[0];

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addOnsTotal = selectedAddOns.reduce((sum, addOnId) => {
    const item = addOnsList.find((a) => a.id === addOnId);
    return sum + (item ? item.price : 0);
  }, 0);

  const totalPrice = activeConsult.price + addOnsTotal;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientPhone) return;
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
    `Hi Apex Physio & Recovery!`,
    ``,
    `I'd like to book a physiotherapy consultation:`,
    `• Consultation: ${activeConsult.name} (R${activeConsult.price})`,
    `• Focus Area: ${selectedArea}`,
    chosenAddOnsText ? `• Add-ons: ${chosenAddOnsText} (+R${addOnsTotal})` : null,
    `• Total: R${totalPrice}`,
    `• Preferred Slot: ${selectedSlot.day} @ ${selectedSlot.time}`,
    `• Patient Name: ${patientName}`,
    `• Phone: ${patientPhone}`,
    medicalAid ? `• Medical Aid: ${medicalAid}` : "• Payment: Card / Private",
    ``,
    `Please confirm my consultation slot.`,
  ]
    .filter(Boolean)
    .join("\n");

  const whatsAppUrl = `https://wa.me/27820000000?text=${encodeURIComponent(
    whatsAppText
  )}`;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased">
      <DemoHeaderBar currentSlug="physio-recovery" />

      {/* Header & Hero Photography */}
      <header className="border-b border-[#E2E8F0] bg-white px-6 pt-12 pb-10 sm:pt-16 sm:pb-14">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-[#0D9488]">
            The Zone @ Rosebank • Johannesburg
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium italic sm:text-5xl text-[#0F172A]">
            Apex Physio &amp; Recovery
          </h1>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed">
            Evidence-based musculoskeletal physiotherapy, dry needling &amp; athlete rehab.
          </p>

          {/* Trust badges */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 font-mono text-xs text-[#475569]">
            <span className="rounded-full bg-[#CCFBF1]/60 border border-[#99F6E4] px-3 py-1 text-[#0F766E] font-semibold">
              ✓ Medical Aid Claimable (Discovery, Bonitas, Momentum)
            </span>
            <span className="rounded-full bg-[#F1F5F9] border border-[#E2E8F0] px-3 py-1">
              HPCSA &amp; SASP Registered
            </span>
          </div>

          {/* Hero Photography Card */}
          <div className="mt-8 overflow-hidden rounded-3xl border border-[#E2E8F0] shadow-2xl">
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#F1F5F9]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/demos/physio.jpg"
                alt="Apex Physio & Recovery state-of-the-art clinical space"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-xl px-6 py-12 pb-32">
        {/* Step 1: Select Consultation Tier */}
        <section>
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#64748B]">
              1. Choose Consultation Type
            </h2>
            <span className="font-mono text-xs text-[#0D9488] font-medium">ZAR Rates</span>
          </div>

          <div className="mt-4 space-y-3">
            {consultationTypes.map((c) => {
              const isSelected = c.id === selectedConsultId;

              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedConsultId(c.id)}
                  className={`w-full rounded-2xl border p-5 text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border-[#0D9488] bg-[#F0FDFA] ring-2 ring-[#0D9488]/30 shadow-xs"
                      : "border-[#E2E8F0] bg-white hover:border-[#CBD5E1]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-[#0F172A]">{c.name}</span>
                        {c.tag && (
                          <span className="rounded-full bg-[#CCFBF1] px-2 py-0.5 font-mono text-[9px] font-bold text-[#0F766E]">
                            {c.tag}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-[#64748B] leading-relaxed">{c.desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-mono text-sm font-bold text-[#0D9488]">
                        R{c.price}
                      </div>
                      <div className="font-mono text-[10px] text-[#64748B]">
                        {c.duration}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Optional Add-ons */}
          <div className="mt-6 rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-xs">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#64748B]">
              Optional Recovery Add-ons
            </h3>
            <div className="mt-3 space-y-2">
              {addOnsList.map((item) => {
                const isChecked = selectedAddOns.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleAddOn(item.id)}
                    className={`w-full flex items-center justify-between rounded-xl border p-3.5 text-left transition-colors cursor-pointer ${
                      isChecked
                        ? "border-[#0D9488] bg-[#F0FDFA] text-[#0F172A]"
                        : "border-[#E2E8F0] bg-[#F8FAFC] text-[#334155] hover:border-[#CBD5E1]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border text-[10px] ${
                          isChecked
                            ? "border-[#0D9488] bg-[#0D9488] text-white font-bold"
                            : "border-[#94A3B8] bg-transparent"
                        }`}
                      >
                        {isChecked && "✓"}
                      </span>
                      <div>
                        <div className="text-xs font-semibold text-[#0F172A]">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-[#64748B]">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#0D9488] shrink-0 ml-3">
                      +R{item.price}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Step 2: Injury / Focus Area Chips */}
        <section className="mt-8 rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#64748B]">
              2. Primary Area of Pain / Concern
            </h2>
            <span className="font-mono text-xs text-[#64748B]">Clinical Intake</span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {bodyAreas.map((area) => {
              const isSelected = selectedArea === area;
              return (
                <button
                  key={area}
                  type="button"
                  onClick={() => setSelectedArea(area)}
                  className={`rounded-xl border py-2.5 px-3 text-center text-xs transition-all cursor-pointer ${
                    isSelected
                      ? "border-[#0D9488] bg-[#0D9488] text-white font-medium shadow-xs"
                      : "border-[#E2E8F0] bg-[#F8FAFC] text-[#334155] hover:border-[#94A3B8]"
                  }`}
                >
                  {area}
                </button>
              );
            })}
          </div>
        </section>

        {/* Step 3: Available Openings */}
        <section className="mt-8 rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#64748B]">
              3. Select Appointment Slot
            </h2>
            <span className="font-mono text-xs text-[#0D9488] font-semibold">Real-Time Openings</span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {availableSlots.map((slot, i) => {
              const isSelected =
                selectedSlot.day === slot.day && selectedSlot.time === slot.time;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`rounded-xl border py-3 px-2 text-center transition-all cursor-pointer ${
                    isSelected
                      ? "border-[#0D9488] bg-[#0D9488] text-white font-bold shadow-xs"
                      : "border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] hover:border-[#CBD5E1]"
                  }`}
                >
                  <div className="text-[11px] opacity-80">{slot.day}</div>
                  <div className="font-mono text-sm font-semibold">{slot.time}</div>
                  <div className={`mt-0.5 text-[9px] font-mono ${isSelected ? "text-white/80" : "text-[#64748B]"}`}>
                    {slot.spots}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Step 4: Patient Details */}
        <section className="mt-8 rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-xs">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#64748B]">
            4. Confirm Appointment
          </h2>

          {isBooked ? (
            <div className="mt-5 rounded-2xl bg-[#CCFBF1]/40 border border-[#99F6E4] p-6 sm:p-8 text-center animate-in fade-in duration-300">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0D9488] text-white text-lg font-bold">
                ✓
              </div>
              <h3 className="mt-4 font-display text-2xl font-medium text-[#0F172A]">
                Appointment Held, {patientName}!
              </h3>
              <p className="mt-2 text-sm text-[#475569] leading-relaxed max-w-md mx-auto">
                {activeConsult.name} ({selectedArea}) reserved for{" "}
                <strong>{selectedSlot.day} at {selectedSlot.time}</strong>. Total: <strong>R{totalPrice}</strong>.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-block rounded-full bg-[#0D9488] px-7 py-3 text-xs font-semibold tracking-tight text-white shadow-xs transition-all duration-300 hover:bg-[#0F766E]"
                >
                  Open WhatsApp Confirmation →
                </a>
                <button
                  type="button"
                  onClick={() => setIsBooked(false)}
                  className="text-xs font-semibold text-[#64748B] hover:text-[#0F172A] transition-colors py-2 px-3 cursor-pointer"
                >
                  Change details
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="physio-name"
                  className="block text-xs font-medium text-[#64748B]"
                >
                  Full Name
                </label>
                <input
                  id="physio-name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. Sindi Ndaba"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[#E2E8F0] px-4 py-3 text-sm text-[#0F172A] focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="physio-phone"
                  className="block text-xs font-medium text-[#64748B]"
                >
                  WhatsApp / Mobile Number
                </label>
                <input
                  id="physio-phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="e.g. 082 876 5432"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[#E2E8F0] px-4 py-3 text-sm text-[#0F172A] focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="physio-med"
                  className="block text-xs font-medium text-[#64748B]"
                >
                  Medical Aid Scheme &amp; Number (Optional)
                </label>
                <input
                  id="physio-med"
                  type="text"
                  placeholder="e.g. Discovery Health - Classic Comprehensive"
                  value={medicalAid}
                  onChange={(e) => setMedicalAid(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[#E2E8F0] px-4 py-3 text-sm text-[#0F172A] focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#0D9488] py-4 text-sm font-semibold tracking-tight text-white shadow-xs transition-all duration-300 hover:bg-[#0F766E] cursor-pointer"
                >
                  Book Consultation — R{totalPrice} ({selectedSlot.day} @ {selectedSlot.time})
                </button>
                <p className="mt-3 text-center text-xs text-[#64748B]">
                  Claims submitted directly to Medical Aid • Card &amp; SnapScan available
                </p>
              </div>
            </form>
          )}
        </section>

        {/* Apex Clinical Standards Card */}
        <section className="mt-12 rounded-3xl border border-[#E2E8F0] bg-white p-8 text-center shadow-xs">
          <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0D9488]">
            The Apex Clinical Standard
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
            All sessions are conducted one-on-one by SASP-registered musculoskeletal physiotherapists with private treatment suites and immediate diagnostic screening.
          </p>
        </section>
      </main>

      {/* Sticky Mobile Bar */}
      {!isBooked && (
        <div className="fixed bottom-0 left-0 right-0 border-t border-[#E2E8F0] bg-white/95 p-4 backdrop-blur-md sm:hidden z-40">
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("physio-name");
              el?.focus();
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full rounded-full bg-[#0D9488] py-3 text-center text-sm font-semibold text-white shadow-xs cursor-pointer"
          >
            Book Session — R{totalPrice} ({selectedSlot.time})
          </button>
        </div>
      )}
    </div>
  );
}
