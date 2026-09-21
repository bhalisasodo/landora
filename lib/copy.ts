// Site copy, sourced from the approved brand draft and Landora Studio Repositioning Brief.
// Single source of truth — components read from here.

export const contactConfig = {
  whatsappNumber: "27606021978",
  whatsappDisplayNumber: "060 602 1978",
  whatsappBaseUrl: "https://wa.me/27606021978",
  email: "hello@landora.co.za",
};

export function getWhatsAppUrl(details?: {
  name?: string;
  businessName?: string;
  leakFocus?: string;
  industry?: string;
  phone?: string;
  url?: string;
}) {
  if (!details || (!details.name && !details.businessName)) {
    return `${contactConfig.whatsappBaseUrl}?text=${encodeURIComponent(
      "Hi Landora! I'd like to request a Leak Audit for my business."
    )}`;
  }

  const lines = [
    "Hi Landora!",
    "",
    "I'd like to request a Leak Audit for my business.",
    details.name ? `• Name: ${details.name}` : "",
    details.businessName ? `• Business: ${details.businessName}` : "",
    details.leakFocus ? `• Suspected Leak: ${details.leakFocus}` : details.industry ? `• Category: ${details.industry}` : "",
    details.phone ? `• WhatsApp / Cell: ${details.phone}` : "",
    details.url ? `• Website / Social: ${details.url}` : "",
    "",
    "Let's diagnose where we're leaking.",
  ].filter(Boolean);

  return `${contactConfig.whatsappBaseUrl}?text=${encodeURIComponent(
    lines.join("\n")
  )}`;
}

// 1. Hero Section
export const hero = {
  headline: "We find where you're leaking. Then we fix it.",
  subhead: "You don't need more marketing. You need the leak found.",
  primaryCta: "Request a Leak Audit",
  secondaryCta: "Explore the Fixes",
  // Demoted supporting line preserved from original single-SKU hero
  supportingLine: "One link that turns lookers into bookers.",
};

export type Industry = {
  slug: string;
  label: string;
  archetype: string;
  leakLine: string;
  image: string;
};

export const industries: Industry[] = [
  {
    slug: "restaurant-cafe",
    label: "Restaurant & Cafe",
    archetype: "Booking-First Landing Page",
    leakLine:
      "They wanted a table for two, tonight. Your site sent them to a menu PDF and a phone number — during dinner service.",
    image: "/demos/restaurant.jpg",
  },
  {
    slug: "fitness-studio",
    label: "Fitness Studio / Gym",
    archetype: "High-Conversion Website",
    leakLine:
      "They were ready to commit to a gym membership. Your site asked them to 'enquire' and wait 24 hours for a callback.",
    image: "/demos/fitness.jpg",
  },
  {
    slug: "barber-studio",
    label: "Barber & Grooming Club",
    archetype: "Paid Ad Campaign Funnel",
    leakLine:
      "You spent R5,000 on Instagram and Google ads. Clicks bounced off a generic homepage with zero irresistible offer.",
    image: "/demos/barber.jpg",
  },
];

// 2. The Leak Categories — Studio-wide (Maps to the 4 services)
export type LeakCategory = {
  name: string;
  slug: string;
  description: string;
  mapsToService: string;
  serviceId: string;
};

export const leakCategories: LeakCategory[] = [
  {
    name: "The Dead End",
    slug: "dead-end",
    description: "Your site doesn't close. It just... ends.",
    mapsToService: "Websites",
    serviceId: "websites",
  },
  {
    name: "Ghost Traffic",
    slug: "ghost-traffic",
    description: "You're paying for clicks nobody sees convert.",
    mapsToService: "Paid Ads",
    serviceId: "ads",
  },
  {
    name: "Buried Alive",
    slug: "buried-alive",
    description: "You're invisible the moment someone searches.",
    mapsToService: "Organic SEO",
    serviceId: "seo",
  },
  {
    name: "Cold Trail",
    slug: "cold-trail",
    description: "They forget you exist between visits.",
    mapsToService: "Content & Social",
    serviceId: "content",
  },
];

// Backwards compatibility alias
export const leakArchetypes = leakCategories;

export const leakSection = {
  eyebrow: "The Leak",
  body: [
    "Somewhere between your marketing spend and your bank account, people disappear. Not because they weren't interested — because there's a leak in the pipeline.",
    "An ad that clicks to nowhere. A site invisible on Google. A homepage that looks lovely and asks for nothing.",
    "That's not a marketing problem. That's revenue walking out the door.",
  ],
  gridEyebrow: "The 4 Pipeline Leaks",
  gridHeadline: "Where the drop-off actually happens.",
};

// 3. The Audit — Studio Entry Point
export const auditSection = {
  eyebrow: "The Audit • Step 01",
  headline: "Before we build anything, we find the leak.",
  subhead:
    "A diagnosis of where your revenue actually drops off — across your site, ads, search, and social — before anything gets built or bought.",
  beats: [
    {
      number: "01",
      title: "What it is",
      body: "A complete diagnostic across your website, ad spend, organic search, and retention loops. We uncover where you are actually losing customers — not where you guess you are.",
    },
    {
      number: "02",
      title: "Why it exists",
      body: "To prevent you from paying for the wrong fix. Commissioning a new website when your real leak is search invisibility wastes budget. We diagnose first so you never buy the wrong solution.",
    },
    {
      number: "03",
      title: "What you get",
      body: "A terse, plain-language readout. The leaks found, ranked by customer drop-off impact, and the exact precision fixes required to plug each one.",
    },
  ],
  primaryCta: "Request a Leak Audit",
  secondaryCta: "Explore Studio Fixes",
  guaranteeNote: "100% free audit • No build commitment required • Clear diagnosis upfront",
};

// 4. Services — Four ways to plug the leak
export type StudioService = {
  id: string;
  name: string;
  leakCategory: string;
  leakLine: string;
  whatWeDo: string;
  supportingLine?: string;
  cta: string;
  badge: string;
  href: string;
  isFeatured?: boolean;
};

export const servicesSection = {
  eyebrow: "The Fixes • Studio Services",
  headline: "Four ways to plug the leak. Picked after diagnosis, not before.",
  subhead:
    "We don't push pre-packaged menus. Once the audit locates your drop-off point, we deploy the exact fix.",
  services: [
    {
      id: "websites",
      name: "Websites & Landing Pages",
      leakCategory: "Dead End",
      leakLine: "Your site doesn't close. It just... ends.",
      whatWeDo:
        "High-conversion, single-link landing pages and sites built around a single job: get the booking. Fast, mobile-first, zero dead ends.",
      supportingLine: "One link that turns lookers into bookers.",
      cta: "Explore Live Demos",
      badge: "Flagship Fix",
      href: "/demos",
      isFeatured: true,
    },
    {
      id: "ads",
      name: "Paid Acquisition",
      leakCategory: "Ghost Traffic",
      leakLine: "You're paying for clicks nobody sees convert.",
      whatWeDo:
        "Meta and Google campaigns structured to stop budget bleeding into wasted impressions. High-intent traffic funneled directly into dedicated closing funnels.",
      cta: "Inquire About Ad Management",
      badge: "Traffic Fix",
      href: "#get-started",
    },
    {
      id: "seo",
      name: "Organic Search & Local SEO",
      leakCategory: "Buried Alive",
      leakLine: "You're invisible the moment someone searches.",
      whatWeDo:
        "The slow leak that compounds if ignored. We optimize your local Google presence, maps, and organic search architecture so ready-to-buy customers find you first.",
      cta: "Inquire About SEO",
      badge: "Visibility Fix",
      href: "#get-started",
    },
    {
      id: "content",
      name: "Content & Retention",
      leakCategory: "Cold Trail",
      leakLine: "They forget you exist between visits.",
      whatWeDo:
        "What keeps a fixed leak from reopening. Strategic content cadence, WhatsApp re-engagement, and customer loops that turn one-time customers into repeat clients.",
      cta: "Inquire About Retention",
      badge: "Retention Fix",
      href: "#get-started",
    },
  ] as StudioService[],
};

// Backwards compatibility alias for Fix section
export const fixSection = {
  eyebrow: servicesSection.eyebrow,
  body: servicesSection.headline,
  demoCta: "See all demos",
};

// 5. Pricing Section
export const pricingSection = {
  eyebrow: "The Pricing Model",
  startingPrice: 1650,
  startingPriceDisplay: "From R1650",
  startingPriceLabel: "Studio fixes starting price • Diagnostic audit is 100% free",
  auditPrice: 1650, // Preserved backwards-compatibility alias
  auditPriceDisplay: "100% Free",
  secondaryLine:
    "The Leak Audit is completely free with zero commitment. Once we locate your pipeline drop-off, precision studio fixes start from R1650.",
  includes: [
    "100% free comprehensive 4-surface diagnostic (Site, Paid Ads, Search, Content)",
    "Pinpoints exactly where revenue drops off and prioritizes the leaks",
    "Short, plain-language readout with specific fix recommendations",
    "Zero commitment — precision studio fixes start from R1650 with no lock-in",
  ],
  cta: "Request Your Free Leak Audit",
};

// 6. Proof Section — Studio Scope
export const proofSection = {
  eyebrow: "No fake testimonials. Just look at the work.",
  body:
    "We're not going to invent glowing reviews from businesses that don't exist. Instead — here is the actual work. Real leak fixes, precision architecture, built to close.",
  foundingCallout:
    "The Leak Audit is 100% free for all businesses. Founding clients receive 50% off their first studio fix for being early — limited to the first 5 businesses. Downstream fix quotes follow diagnostic findings with founding-partner terms.",
  trustLine: "Built for South African businesses. Priced in Rand. Clear diagnosis, no surprises.",
};

// 7. Frequently Asked Questions
export const faqSection = {
  eyebrow: "Frequently Asked Questions",
  headline: "Everything you need to know about the audit and studio fixes.",
  items: [
    {
      question: "How much does the Leak Audit cost?",
      answer:
        "The Leak Audit is 100% free. We inspect all 4 surfaces where your business might be losing revenue — your website, paid ads, search visibility, and retention loops — with zero cost and zero obligation. If you choose to have us plug the leaks, our studio fixes start from R1650.",
    },
    {
      question: "Why do you start with a Leak Audit instead of just building a website?",
      answer:
        "Because most businesses commission the wrong fix. Paying for a website redesign when your real problem is zero search visibility wastes capital. The free Leak Audit diagnoses where your pipeline is actually dropping customers before you spend a cent on building anything.",
    },
    {
      question: "What does the Leak Audit actually cover?",
      answer:
        "We inspect all four critical surfaces: your website/landing conversion path, your paid ad efficiency, your search engine and Google Maps visibility, and your customer retention loops. You receive a concise, plain-English summary of what's broken and the prioritized fixes needed.",
    },
    {
      question: "How are the fixes quoted after the audit?",
      answer:
        "Fixes start from R1650 and are quoted individually based on the audit's diagnostic readout. If you only need a single-link conversion page, that's all we quote. If your leak requires paid ads or local SEO, we provide a transparent, scoped proposal. There is zero obligation to proceed with our fixes.",
    },
    {
      question: "Does the founding-client discount apply studio-wide?",
      answer:
        "The Leak Audit is already 100% free for everyone. Our 50% founding discount applies to your first studio fix for the first 5 businesses, in exchange for verified post-launch case studies.",
    },
    {
      question: "Can I still commission a single-link high-conversion website?",
      answer:
        "Yes. Websites remain one of our core, flagship fixes. If the audit confirms your conversion drop-off is a website dead end, we build our signature fast, mobile-native, WhatsApp-integrated page live in days.",
    },
    {
      question: "How long does the Leak Audit take to complete?",
      answer:
        "Typically 2 to 3 business days from when you share your links and business info. We analyze your live surfaces and deliver a clear, actionable readout directly to your WhatsApp or email.",
    },
  ],
};

// 8. Close Section
export const closeSection = {
  headline: "Stop guessing where you're losing customers.",
  cta: "Request a Leak Audit",
};
