// Site copy, sourced from the approved brand draft.
// Keep this the single source of truth — components read from here,
// they don't hardcode strings.

export const contactConfig = {
  whatsappNumber: "27768965502",
  whatsappDisplayNumber: "076 896 5502",
  whatsappBaseUrl: "https://wa.me/27768965502",
  email: "hello@launchgremlin.com",
};

export function getWhatsAppUrl(details?: {
  name?: string;
  businessName?: string;
  industry?: string;
  phone?: string;
}) {
  if (!details || (!details.name && !details.businessName)) {
    return `${contactConfig.whatsappBaseUrl}?text=${encodeURIComponent(
      "Hi Landora! I'm ready to build a booking-first landing page for my business."
    )}`;
  }

  const lines = [
    "Hi Landora!",
    "",
    "I'd like to get started on a booking-first landing page.",
    details.name ? `• Name: ${details.name}` : "",
    details.businessName ? `• Business: ${details.businessName}` : "",
    details.industry ? `• Category: ${details.industry}` : "",
    details.phone ? `• WhatsApp / Cell: ${details.phone}` : "",
    "",
    "Let's discuss getting this live.",
  ].filter(Boolean);

  return `${contactConfig.whatsappBaseUrl}?text=${encodeURIComponent(
    lines.join("\n")
  )}`;
}

export const hero = {
  headline: "One link that turns lookers into bookers.",
  subhead: "You don't need a prettier website. You need one that closes.",
  primaryCta: "Get Started — R1450 once",
  secondaryCta: "View all demos",
};

export type Industry = {
  slug: string;
  label: string;
  leakLine: string;
  image: string; // path under /public
};

// Per-industry leak lines, rotated into "The Leak" section depending on
// the active demo. Add new industries here as new demos are built.
export const industries: Industry[] = [
  {
    slug: "spa-wellness",
    label: "Spa & Wellness",
    leakLine:
      "They wanted to book a massage. They got a PDF price list and a WhatsApp number they had to copy by hand.",
    image: "/demos/spa.jpg",
  },
  {
    slug: "restaurant-cafe",
    label: "Restaurant & Cafe",
    leakLine:
      "They wanted a table for two, tonight. Your site sent them to a menu PDF and a phone number — during dinner service.",
    image: "/demos/restaurant.jpg",
  },
  {
    slug: "fitness-studio",
    label: "Fitness Studio",
    leakLine:
      "They were ready to book a trial class. Your site asked them to 'enquire' and wait for a callback.",
    image: "/demos/fitness.jpg",
  },
  {
    slug: "barber-studio",
    label: "Barber & Grooming Club",
    leakLine:
      "They needed a fresh fade for Saturday night. Your site asked them to call a landline while the shop was closed.",
    image: "/demos/barber.jpg",
  },
  {
    slug: "physio-recovery",
    label: "Physio & Sports Recovery",
    leakLine:
      "They strained a hamstring before the weekend race. Your site made them download a PDF intake form and wait for email confirmation.",
    image: "/demos/physio.jpg",
  },
];

export const leakArchetypes = [
  { name: "The Dead End", description: "Homepage looks good, no clear next action." },
  { name: "The Scavenger Hunt", description: "Booking or contact buried multiple clicks deep." },
  { name: "The Ghost Form", description: "Contact form emails an inbox nobody checks promptly." },
  { name: "The Mismatch", description: "Ad or social traffic lands on a homepage that doesn't match the promise." },
  { name: "The Desktop Trap", description: "Site 'works' on mobile but wasn't designed for it." },
];

export const leakSection = {
  eyebrow: "The Leak",
  body: [
    "Somewhere between your Instagram bio and your booking calendar, people disappear. Not because they weren't interested — because your website made them work for it.",
    "A menu with no “Book Now.” A contact form nobody checks. A homepage that looks lovely and asks for nothing.",
    "That's not a design problem. That's revenue walking out the door.",
  ],
};

export const fixSection = {
  eyebrow: "The Fix",
  body:
    "One link. Built around a single job: get the booking. No menus to get lost in. No five-click path to a contact form. Just your business, your offer, and a button that actually does something.",
  demoCta: "See the fix",
};

// Pre-launch proof section — no fabricated testimonials or case studies.
// Replace this block wholesale once real client results exist.
export const proofSection = {
  eyebrow: "No fake testimonials. Just look at the thing.",
  body:
    "We're not going to invent a glowing review from a business that doesn't exist. Instead — here's the actual product. Real layouts, built for real bookings.",
  foundingCallout:
    "Founding clients get 50% off (R725 once) for being early — limited to the first 5 businesses. Once initial case studies land, standard R1450 pricing applies.",
  trustLine: "Built for South African businesses. Priced in Rand. No retainers, no surprises.",
};

export const pricingSection = {
  eyebrow: "One price. No catch.",
  body: "R1450, once. Not a subscription. Not “starting at.” Just the price.",
  includes: [
    "A booking-first landing page, built for your business",
    "Mobile-first design (because that's where your customers are)",
    "Live in days, not months",
  ],
  cta: "Get Started",
};

export const faqSection = {
  eyebrow: "Frequently Asked Questions",
  headline: "Everything you need to know before claiming your build.",
  items: [
    {
      question: "Are there any monthly subscription fees or hidden retainers?",
      answer:
        "None. R1450 is a once-off build fee. You own your page entirely. Standard domain and hosting is either hosted on your existing South African host or setup with zero markup (~R80–R120/mo).",
    },
    {
      question: "How do bookings actually reach my phone?",
      answer:
        "Every booking triggers an instant WhatsApp message directly to your phone with a clean, pre-filled brief: customer name, phone number, chosen services, add-ons, date, and special requests. No lost inbox emails or complicated dashboards.",
    },
    {
      question: "How long does it take until my single-link page is live?",
      answer:
        "Typically 3 to 5 working days from when you submit your services, pricing, and logo. We build it, configure WhatsApp routing, test mobile speed, and connect your domain.",
    },
    {
      question: "Can I use my existing website domain (e.g. mybusiness.co.za)?",
      answer:
        "Yes, 100%. We can connect your existing .co.za or custom domain at zero extra charge, or configure a dedicated booking subdomain (like book.yourbusiness.co.za).",
    },
    {
      question: "What if I already have a traditional 5-page website?",
      answer:
        "You don't need to delete it. Most of our clients keep their informational website and place their Landora single link in their Instagram bio, Google Ads, TikTok, and WhatsApp business profile to turn lookers into paying bookers without friction.",
    },
    {
      question: "Can I accept card payments, SnapScan, or deposits?",
      answer:
        "Yes. We can integrate direct payment buttons for SnapScan, PayFast, Yoco, or Ozow into your booking flow if you require up-front deposits or pre-payment.",
    },
  ],
};

export const closeSection = {
  headline: "Stop being polite. Start getting booked.",
  cta: "Get Started — R1450 once",
};
