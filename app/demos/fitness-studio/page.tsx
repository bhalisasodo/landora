"use client";

import { useState } from "react";
import DemoHeaderBar from "@/components/demos/DemoHeaderBar";

type ClassItem = {
  id: string;
  time: string;
  name: string;
  instructor: string;
  intensity: string;
  focus: string;
  spotsLeft: number;
};

const scheduleData: Record<string, ClassItem[]> = {
  Today: [
    {
      id: "cls-1",
      time: "06:30",
      name: "Sunrise Athletic Reformer",
      instructor: "Nandi M.",
      intensity: "High Tempo",
      focus: "Full Body & Posture",
      spotsLeft: 3,
    },
    {
      id: "cls-2",
      time: "09:00",
      name: "Core Align & Sculpt",
      instructor: "Zoe D.",
      intensity: "Precision Tone",
      focus: "Deep Core & Glutes",
      spotsLeft: 2,
    },
    {
      id: "cls-3",
      time: "12:15",
      name: "Lunch Express Reformer (45m)",
      instructor: "Nandi M.",
      intensity: "Athletic Burn",
      focus: "Upper Body & Stability",
      spotsLeft: 4,
    },
    {
      id: "cls-4",
      time: "17:30",
      name: "Sunset Athletic Reformer",
      instructor: "Thabo K.",
      intensity: "High Tempo",
      focus: "Total Body Conditioning",
      spotsLeft: 1,
    },
  ],
  Tomorrow: [
    {
      id: "cls-5",
      time: "07:00",
      name: "Morning Power Reformer",
      instructor: "Zoe D.",
      intensity: "High Tempo",
      focus: "Cardio & Core",
      spotsLeft: 5,
    },
    {
      id: "cls-6",
      time: "10:30",
      name: "Functional Spine & Decompression",
      instructor: "Thabo K.",
      intensity: "Restorative",
      focus: "Mobility & Lower Back",
      spotsLeft: 3,
    },
    {
      id: "cls-7",
      time: "18:00",
      name: "Athletic Burn & Stamina",
      instructor: "Nandi M.",
      intensity: "Peak Intensity",
      focus: "Legs & Core Power",
      spotsLeft: 2,
    },
  ],
  Saturday: [
    {
      id: "cls-8",
      time: "08:30",
      name: "Weekend Warrior Reformer",
      instructor: "Nandi M.",
      intensity: "Peak Intensity",
      focus: "Full Body Endurance",
      spotsLeft: 2,
    },
    {
      id: "cls-9",
      time: "10:00",
      name: "Core Sculpt & Lengthen",
      instructor: "Zoe D.",
      intensity: "Precision Tone",
      focus: "Posture & Hip Openers",
      spotsLeft: 4,
    },
    {
      id: "cls-10",
      time: "11:30",
      name: "Restorative Flow & Breathwork",
      instructor: "Thabo K.",
      intensity: "Gentle Recovery",
      focus: "Full Recovery",
      spotsLeft: 6,
    },
  ],
};

const coaches = [
  {
    name: "Nandi M.",
    role: "Head Master Instructor",
    credentials: "BSc Sports Science • STOTT Pilates Lead • 8+ Yrs",
    bio: "Ex-classical dancer turned high-performance reformer coach. Specializes in biomechanical alignment and spine decompression.",
    accent: "Full Body Power",
  },
  {
    name: "Zoe D.",
    role: "Athletic Conditioning Coach",
    credentials: "BASI Certified • Kettlebell & Reformer Specialist",
    bio: "Brings athletic tempo and deep muscular endurance into every class. Known for high-energy playlists and relentless burn.",
    accent: "Endurance & Sculpt",
  },
  {
    name: "Thabo K.",
    role: "Functional Mobility Specialist",
    credentials: "Biokinetics Hons • Neuromuscular Recovery Lead",
    bio: "Focuses on injury prevention, hip mobility, and rotational core stability for runners, golfers, and desk-bound professionals.",
    accent: "Mobility & Rehab",
  },
];

const amenities = [
  {
    title: "12 Custom SPX Reformers",
    desc: "State-of-the-art Canadian Merrithew reformers with premium jump-boards and cardio tramps. Cap on class size ensures individual coach correction.",
  },
  {
    title: "Rainfall Showers & Lockers",
    desc: "Private marble rain showers, organic botanical wash, Dyson Supersonic hair dryers, and keyless digital lockers.",
  },
  {
    title: "Post-Workout Espresso Bar",
    desc: "Complimentary single-origin double espresso, iced electrolyte tonics, and chilled towels waiting after every class.",
  },
];

const pricingTiers = [
  {
    id: "intro",
    name: "7-Day Unlimited Intro Pass",
    price: 250,
    period: "first 7 days",
    badge: "Most Popular For New Starters",
    highlight: true,
    features: [
      "Unlimited classes across 7 consecutive days",
      "Valid for all times & instructors",
      "Personal posture & reformer setup consult",
      "Grip socks included upon arrival",
      "Zero lock-in contracts or renewal pressure",
    ],
  },
  {
    id: "pack",
    name: "10-Class Studio Pack",
    price: 1800,
    period: "valid 3 months (R180 / class)",
    badge: "Flexible Attendance",
    highlight: false,
    features: [
      "Book any class on the schedule",
      "3-month booking window",
      "Share up to 2 passes with a guest",
      "Complimentary locker & towel service",
      "Early 7-day advance booking access",
    ],
  },
  {
    id: "unlimited",
    name: "Unlimited Studio Retainer",
    price: 2400,
    period: "per month • cancel anytime",
    badge: "Maximum Value",
    highlight: false,
    features: [
      "Unlimited monthly classes",
      "14-day priority advance booking window",
      "2 complimentary guest passes per month",
      "10% off workshop & recovery events",
      "Freeze membership for up to 30 days/yr",
    ],
  },
];

const memberReviews = [
  {
    author: "Lara V. • Rosebank",
    text: "Switched from a traditional gym after 6 months of persistent lower back pain. In 4 weeks at Forge, my core feels bulletproof and pain is 100% gone.",
    stars: 5,
  },
  {
    author: "Kagiso M. • Melrose Arch",
    text: "The 12-reformer cap makes a massive difference. Nandi watches every rep. Booking through WhatsApp takes 10 seconds flat.",
    stars: 5,
  },
  {
    author: "David B. • Parkhurst",
    text: "Cleanest, most professional studio in Joburg. Showers, espresso, and high-intensity workout all wrapped up before my 8:30 AM meetings.",
    stars: 5,
  },
];

export default function FitnessStudioDemo() {
  const [selectedDay, setSelectedDay] = useState("Today");
  const [selectedTier, setSelectedTier] = useState(pricingTiers[0].name);
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);
  const [memberName, setMemberName] = useState("");
  const [memberPhone, setMemberPhone] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const currentClasses = scheduleData[selectedDay] || scheduleData["Today"];
  const activeClass = currentClasses.find((c) => c.id === selectedClassId);

  const handleClaimPass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!memberName || !memberPhone) return;
    setIsBooked(true);
  };

  const whatsAppText = [
    `Hi Forge Reformer Pilates!`,
    ``,
    `I'd like to claim my Intro Pass & reserve my spot:`,
    `• Package: ${selectedTier}`,
    activeClass
      ? `• First Class: ${activeClass.name} (${selectedDay} at ${activeClass.time}) with ${activeClass.instructor}`
      : `• First Class: Flexible scheduling`,
    `• Name: ${memberName}`,
    `• WhatsApp: ${memberPhone}`,
    ``,
    `Please confirm my spot and pass activation!`,
  ].join("\n");

  const whatsAppUrl = `https://wa.me/27820000000?text=${encodeURIComponent(
    whatsAppText
  )}`;

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#12161A] antialiased selection:bg-[#0052CC] selection:text-white">
      <DemoHeaderBar currentSlug="fitness-studio" />

      {/* Hero & Authority Section */}
      <header className="relative border-b border-[#E1E5EA] bg-white px-6 pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Top Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full bg-[#EBF2FF] border border-[#BFD7FF] px-3.5 py-1 font-mono text-xs font-semibold text-[#0052CC]">
              Archetype: High-Conversion Website
            </span>
            <span className="rounded-full bg-[#F0F2F5] border border-[#E1E5EA] px-3.5 py-1 font-mono text-xs text-[#525F6E]">
              The Firs • Rosebank, Johannesburg
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-medium italic tracking-tight sm:text-6xl text-[#12161A]">
            Train with Athletic Precision. <br className="hidden sm:inline" />
            Move Without Pain.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#525F6E] sm:text-xl leading-relaxed">
            High-intensity athletic reformer pilates designed for posture, functional strength, and joint longevity. Capped at 12 reformers for dedicated coach attention.
          </p>

          {/* Social Proof Stats Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 border-y border-[#E1E5EA] py-4 font-mono text-xs sm:text-sm text-[#525F6E]">
            <div className="flex items-center gap-1.5">
              <span className="text-[#0052CC] font-bold">★ 4.9</span>
              <span>140+ Google Reviews</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#0052CC] font-bold">12</span>
              <span>Reformers Max</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#0052CC] font-bold">100%</span>
              <span>Certified Masters</span>
            </div>
          </div>

          {/* Dual Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#claim-pass"
              className="w-full sm:w-auto rounded-full bg-[#0052CC] px-8 py-3.5 font-sans text-sm font-semibold text-white shadow-md transition-all hover:bg-[#0747A6] hover:shadow-lg active:scale-95"
            >
              Claim 7-Day Intro Pass (Save 50%) →
            </a>
            <a
              href="#schedule"
              className="w-full sm:w-auto rounded-full border border-[#DCDFE4] bg-white px-7 py-3.5 font-sans text-sm font-medium text-[#12161A] hover:bg-[#F4F5F7] transition-colors"
            >
              Explore Daily Schedule ↓
            </a>
          </div>

        </div>
      </header>

      {/* Main Content Sections */}
      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24 space-y-24">
        {/* Section 1: Daily Class Schedule & Live Capacity */}
        <section id="schedule" className="scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0052CC]">
              Live Studio Schedule
            </p>
            <h2 className="mt-2 font-display text-3xl italic sm:text-4xl text-[#12161A]">
              Small Groups. Big Impact.
            </h2>
            <p className="mt-2 text-sm text-[#525F6E]">
              Every class is capped at 12 reformers. Select a day to view upcoming open spots.
            </p>
          </div>

          {/* Day Tabs */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {["Today", "Tomorrow", "Saturday"].map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => {
                  setSelectedDay(day);
                  setSelectedClassId(null);
                }}
                className={`rounded-full px-5 py-2 font-mono text-xs font-medium transition-colors cursor-pointer ${
                  selectedDay === day
                    ? "bg-[#0052CC] text-white shadow-xs"
                    : "border border-[#DCDFE4] bg-white text-[#525F6E] hover:border-[#0052CC] hover:text-[#12161A]"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Class List */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {currentClasses.map((cls) => {
              const isSelected = selectedClassId === cls.id;
              return (
                <div
                  key={cls.id}
                  onClick={() => setSelectedClassId(cls.id)}
                  className={`flex flex-col justify-between rounded-2xl border p-5 transition-all cursor-pointer ${
                    isSelected
                      ? "border-[#0052CC] bg-[#EBF2FF]/60 shadow-md ring-2 ring-[#0052CC]/20"
                      : "border-[#E1E5EA] bg-white hover:border-[#0052CC]/40 hover:shadow-xs"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-lg font-bold text-[#12161A]">
                        {cls.time}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] font-semibold ${
                          cls.spotsLeft <= 2
                            ? "bg-red-100 text-red-700"
                            : "bg-emerald-100 text-emerald-800"
                        }`}
                      >
                        {cls.spotsLeft === 1 ? "1 spot left" : `${cls.spotsLeft} spots left`}
                      </span>
                    </div>

                    <h3 className="mt-2 text-base font-semibold text-[#12161A]">
                      {cls.name}
                    </h3>
                    <p className="mt-1 text-xs text-[#525F6E]">
                      Focus: {cls.focus}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-[#E1E5EA]/70 pt-3 text-xs">
                    <span className="text-[#525F6E]">Coach: <strong className="text-[#12161A]">{cls.instructor}</strong></span>
                    <span className="font-mono text-[11px] text-[#0052CC] font-semibold">
                      {cls.intensity}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-[#525F6E]">
              {selectedClassId
                ? `Selected: ${activeClass?.name} at ${activeClass?.time}. Fill out the form below to lock this spot.`
                : "Tap any class to lock your first session with your Intro Pass."}
            </p>
          </div>
        </section>

        {/* Section 2: Coach Authority & Credentials */}
        <section className="rounded-3xl border border-[#E1E5EA] bg-white p-8 sm:p-12 shadow-xs">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0052CC]">
              Coaching Authority
            </p>
            <h2 className="mt-2 font-display text-3xl italic sm:text-4xl text-[#12161A]">
              Instructors with Clinical &amp; Athletic Pedigree
            </h2>
            <p className="mt-2 text-sm text-[#525F6E]">
              No weekend certifications. Our team holds sports science degrees and international Pilates accreditations.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {coaches.map((c) => (
              <div
                key={c.name}
                className="flex flex-col justify-between rounded-2xl border border-[#E1E5EA] bg-[#F8F9FA] p-6 transition-all hover:-translate-y-1 hover:border-[#0052CC]/30 hover:shadow-md"
              >
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#0052CC] font-bold">
                    {c.accent}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-[#12161A]">
                    {c.name}
                  </h3>
                  <p className="font-mono text-xs text-[#525F6E] mt-0.5">
                    {c.role}
                  </p>
                  <p className="mt-2 text-xs font-medium text-[#0052CC]/90">
                    {c.credentials}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-[#525F6E]">
                    {c.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Studio Tour & Amenities */}
        <section>
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0052CC]">
              The Space
            </p>
            <h2 className="mt-2 font-display text-3xl italic sm:text-4xl text-[#12161A]">
              Designed for Flow, Privacy &amp; Recovery
            </h2>
            <p className="mt-2 text-sm text-[#525F6E]">
              Step into Rosebank's most thoughtfully designed movement studio.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {amenities.map((a, i) => (
              <div
                key={a.title}
                className="rounded-2xl border border-[#E1E5EA] bg-white p-6 shadow-xs"
              >
                <div className="font-mono text-xs font-bold text-[#0052CC]">
                  0{i + 1}
                </div>
                <h3 className="mt-2 text-base font-semibold text-[#12161A]">
                  {a.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#525F6E]">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Transparent Pricing & Membership Matrix */}
        <section id="pricing" className="scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0052CC]">
              Transparent Pricing
            </p>
            <h2 className="mt-2 font-display text-3xl italic sm:text-4xl text-[#12161A]">
              No Hidden Join Fees. No Traps.
            </h2>
            <p className="mt-2 text-sm text-[#525F6E]">
              Start with our 7-day trial or choose a flexible class pack.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {pricingTiers.map((tier) => {
              const isSelected = selectedTier === tier.name;
              return (
                <div
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.name)}
                  className={`flex flex-col justify-between rounded-3xl border p-7 transition-all cursor-pointer ${
                    tier.highlight
                      ? "border-[#0052CC] bg-white shadow-xl ring-2 ring-[#0052CC]/20"
                      : "border-[#E1E5EA] bg-white hover:border-[#0052CC]/40 hover:shadow-md"
                  }`}
                >
                  <div>
                    <span
                      className={`inline-block rounded-full px-3 py-1 font-mono text-[11px] font-semibold ${
                        tier.highlight
                          ? "bg-[#EBF2FF] text-[#0052CC]"
                          : "bg-[#F0F2F5] text-[#525F6E]"
                      }`}
                    >
                      {tier.badge}
                    </span>

                    <h3 className="mt-4 text-xl font-bold text-[#12161A]">
                      {tier.name}
                    </h3>

                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="font-mono text-3xl font-extrabold text-[#12161A]">
                        R{tier.price}
                      </span>
                      <span className="font-mono text-xs text-[#525F6E]">
                        /{tier.period}
                      </span>
                    </div>

                    <ul className="mt-6 space-y-2.5 border-t border-[#E1E5EA] pt-5 text-xs text-[#525F6E]">
                      {tier.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <span className="text-[#0052CC] font-bold">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTier(tier.name);
                        const el = document.getElementById("claim-pass");
                        el?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`w-full rounded-full py-3 text-xs font-semibold transition-all cursor-pointer ${
                        tier.highlight
                          ? "bg-[#0052CC] text-white shadow-sm hover:bg-[#0747A6]"
                          : isSelected
                          ? "bg-[#12161A] text-white"
                          : "border border-[#DCDFE4] bg-white text-[#12161A] hover:bg-[#F4F5F7]"
                      }`}
                    >
                      {tier.id === "intro" ? "Claim Intro Pass →" : `Select ${tier.name}`}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 5: Lead Funnel / WhatsApp Concierge Claim */}
        <section
          id="claim-pass"
          className="scroll-mt-24 rounded-3xl border border-[#0052CC]/30 bg-gradient-to-b from-[#EBF2FF]/80 to-white p-8 sm:p-12 shadow-lg"
        >
          <div className="max-w-xl mx-auto text-center">
            <span className="rounded-full bg-[#0052CC] px-3.5 py-1 font-mono text-xs font-semibold text-white">
              Instant Concierge Confirmation
            </span>
            <h2 className="mt-4 font-display text-3xl italic sm:text-4xl text-[#12161A]">
              Lock In Your Reformer Pass
            </h2>
            <p className="mt-2 text-sm text-[#525F6E] leading-relaxed">
              No slow forms or 24-hour callback delays. Submit below to receive your personalized WhatsApp intro voucher and class hold.
            </p>
          </div>

          <form onSubmit={handleClaimPass} className="mx-auto mt-8 max-w-md space-y-4">
            {/* Selected Package Display */}
            <div className="rounded-xl border border-[#BFD7FF] bg-white p-3.5 text-xs flex items-center justify-between">
              <span className="text-[#525F6E]">Selected Tier:</span>
              <strong className="text-[#0052CC] font-mono">{selectedTier}</strong>
            </div>

            {/* Selected Class (Optional) */}
            {activeClass && (
              <div className="rounded-xl border border-[#BFD7FF] bg-white p-3.5 text-xs flex items-center justify-between">
                <span className="text-[#525F6E]">First Class:</span>
                <strong className="text-[#12161A] font-mono">
                  {activeClass.name} ({selectedDay} {activeClass.time})
                </strong>
              </div>
            )}

            <div>
              <label
                htmlFor="member-name"
                className="block font-mono text-xs font-medium uppercase tracking-wider text-[#525F6E]"
              >
                Your Full Name
              </label>
              <input
                id="member-name"
                type="text"
                required
                placeholder="e.g. Sindi Khumalo"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[#DCDFE4] bg-white px-4 py-3 text-sm text-[#12161A] placeholder:text-neutral-400 focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/20 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="member-phone"
                className="block font-mono text-xs font-medium uppercase tracking-wider text-[#525F6E]"
              >
                WhatsApp / Mobile Number
              </label>
              <input
                id="member-phone"
                type="tel"
                required
                placeholder="e.g. 082 123 4567"
                value={memberPhone}
                onChange={(e) => setMemberPhone(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[#DCDFE4] bg-white px-4 py-3 text-sm text-[#12161A] placeholder:text-neutral-400 focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/20 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#0052CC] py-4 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#0747A6] hover:shadow-lg active:scale-95 cursor-pointer"
            >
              Generate WhatsApp Intro Pass →
            </button>

            <p className="text-center font-mono text-[11px] text-[#525F6E]">
              Zero obligation • Pay on arrival at studio reception • Studio lock
            </p>
          </form>

          {/* Success Overlay Modal */}
          {isBooked && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
              <div className="max-w-md rounded-3xl border border-[#E1E5EA] bg-white p-7 text-center shadow-2xl">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-xl text-emerald-600">
                  ✓
                </div>
                <h3 className="mt-4 font-display text-2xl italic font-semibold text-[#12161A]">
                  Pass Ready to Claim!
                </h3>
                <p className="mt-2 text-sm text-[#525F6E] leading-relaxed">
                  We have prepared your pre-filled WhatsApp confirmation with your intro pass rate and class reservation.
                </p>

                <div className="mt-5 rounded-2xl border border-[#E1E5EA] bg-[#F8F9FA] p-4 text-left font-mono text-xs text-[#525F6E] space-y-1">
                  <div>• <strong>Tier:</strong> {selectedTier}</div>
                  {activeClass && (
                    <div>• <strong>Class:</strong> {activeClass.name} ({selectedDay} @ {activeClass.time})</div>
                  )}
                  <div>• <strong>Member:</strong> {memberName}</div>
                  <div>• <strong>Phone:</strong> {memberPhone}</div>
                </div>

                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-full bg-[#25D366] py-3.5 font-sans text-sm font-semibold text-white shadow-sm hover:bg-[#1EBE5D] transition-colors"
                  >
                    Open WhatsApp to Lock Spot →
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsBooked(false)}
                    className="w-full rounded-full py-2.5 font-sans text-xs text-[#525F6E] hover:text-[#12161A]"
                  >
                    Modify Details
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Section 6: Verified Member Reviews */}
        <section>
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0052CC]">
              Rosebank Community
            </p>
            <h2 className="mt-2 font-display text-3xl italic sm:text-4xl text-[#12161A]">
              Loved by 140+ Active Members
            </h2>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {memberReviews.map((rev) => (
              <div
                key={rev.author}
                className="rounded-2xl border border-[#E1E5EA] bg-white p-6 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="text-amber-500 text-xs font-mono">★★★★★</div>
                  <p className="text-xs leading-relaxed text-[#525F6E] italic">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>
                <p className="mt-4 font-mono text-[11px] font-semibold text-[#12161A] border-t border-[#E1E5EA] pt-3">
                  {rev.author}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Sticky Mobile Conversion Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 border-t border-[#E1E5EA] bg-white/95 px-5 py-3 backdrop-blur-md sm:hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <span className="block font-mono text-[10px] text-[#525F6E] uppercase">Intro Offer</span>
            <span className="font-mono text-sm font-bold text-[#12161A]">R250 / 7 Days</span>
          </div>
          <a
            href="#claim-pass"
            className="rounded-full bg-[#0052CC] px-5 py-2.5 font-sans text-xs font-semibold text-white shadow-sm hover:bg-[#0747A6]"
          >
            Claim Intro Pass →
          </a>
        </div>
      </div>
    </div>
  );
}
