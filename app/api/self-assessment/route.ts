const pages = [
  {
    title: "The 5 leaks killing your bookings.",
    subtitle: "A 60-second client self-assessment",
    lines: [
      "Most local businesses do not have a traffic problem.",
      "They have a leaking bucket.",
      "",
      "Use this quick check to find the gaps between your marketing spend",
      "and the bookings that should be reaching your bank account.",
      "",
      "LANDORA STUDIO  |  landora.launchgremlin.com",
    ],
  },
  {
    title: "How to use this assessment",
    subtitle: "Be honest. The goal is an accurate picture, not a passing grade.",
    lines: [
      "Work through each leak in order. Every check can be run on your own phone.",
      "",
      "Tick the box on the final page for every leak you find.",
      "Most businesses have two or three without knowing it.",
      "",
      "Then read the fastest fix and choose the one leak worth plugging first.",
      "",
      "A useful rule: if a ready-to-buy customer has to guess what happens next,",
      "you have a leak.",
    ],
  },
  {
    title: "01  The Dead End",
    subtitle: "Someone lands on your page ready to book, and there is nothing telling them what to do next.",
    lines: [
      "THE 60-SECOND CHECK",
      "Open your homepage as if you have never seen the business before.",
      "Can you tell what to do next in five seconds? Is the action visible without scrolling?",
      "",
      "WHAT IT COSTS",
      "Interested visitors hesitate, browse another tab, and disappear before they ever ask.",
      "",
      "FASTEST FIX",
      "Choose one clear action and repeat it every scroll or two: Book your slot,",
      "Get a quote, or Message us on WhatsApp. Replace vague buttons like Learn More.",
    ],
  },
  {
    title: "02  The Scavenger Hunt",
    subtitle: "Your price, hours, or location exist somewhere, buried three menus and a PDF deep.",
    lines: [
      "THE 60-SECOND CHECK",
      "Time yourself finding your own prices or opening hours from the homepage.",
      "If it takes more than two taps, that is the leak.",
      "",
      "WHAT IT COSTS",
      "People do not message to ask how much anymore. They leave and check the competitor",
      "who simply shows the number.",
      "",
      "FASTEST FIX",
      "Put the decision-making details in the first screen: offer, price range, location,",
      "hours, and a direct booking action.",
    ],
  },
  {
    title: "03  The Ghost Form",
    subtitle: "Someone fills in your enquiry form and hears nothing back for days, if ever.",
    lines: [
      "THE 60-SECOND CHECK",
      "Submit your own contact form. Time how long until you get any confirmation.",
      "Then ask: who actually checks that inbox, and how often?",
      "",
      "WHAT IT COSTS",
      "Every hour between intent and response lowers the chance of a conversation.",
      "",
      "FASTEST FIX",
      "Send an instant confirmation and a same-day human reply. If that is not realistic,",
      "route enquiries straight to WhatsApp instead of a form nobody checks.",
    ],
  },
  {
    title: "04  The Mismatch",
    subtitle: "Your Instagram looks premium. Your website looks like a different, cheaper business.",
    lines: [
      "THE 60-SECOND CHECK",
      "Open your Instagram, Google profile, and website side by side.",
      "Would a stranger know they are looking at the same business?",
      "",
      "WHAT IT COSTS",
      "Trust drops when the promise in the ad does not match the page that receives the click.",
      "",
      "FASTEST FIX",
      "Carry one offer, one visual language, and one next step through every surface.",
      "The page should feel like the natural continuation of the post that earned the click.",
    ],
  },
  {
    title: "05  The Invisible Local",
    subtitle: "A ready-to-buy customer searches for you and finds someone else first.",
    lines: [
      "THE 60-SECOND CHECK",
      "Search your service plus your suburb in Google Maps and regular search.",
      "Check the result as a customer would: current photos, reviews, hours, and a route to book.",
      "",
      "WHAT IT COSTS",
      "You lose the highest-intent visitors before they ever reach your website.",
      "",
      "FASTEST FIX",
      "Keep your Google Business Profile current, ask for reviews after a great visit,",
      "and make your service area and booking path explicit.",
    ],
  },
  {
    title: "Your result",
    subtitle: "Count the leaks you found.",
    lines: [
      "[ ]  01  The Dead End       [ ]  02  The Scavenger Hunt",
      "[ ]  03  The Ghost Form      [ ]  04  The Mismatch",
      "[ ]  05  The Invisible Local",
      "",
      "0-1 leaks  Your foundation is holding. Keep testing.",
      "2-3 leaks  There is likely revenue being lost every week.",
      "4-5 leaks  Fix the path before spending more on traffic.",
      "",
      "Start with the leak closest to the booking. That is usually the fastest win.",
      "",
      "Want a second pair of eyes? Landora's Leak Audit diagnoses the full pipeline",
      "before recommending a fix. Request yours at landora.launchgremlin.com.",
    ],
  },
];

function pdfText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function pageStream(page: (typeof pages)[number], pageNumber: number) {
  const text = [
    "BT",
    "/F1 10 Tf",
    "50 760 Td",
    `(${pdfText("LANDORA STUDIO")}) Tj`,
    "0 -28 Td",
    "/F2 25 Tf",
    `(${pdfText(page.title)}) Tj`,
    "0 -24 Td",
    "/F1 12 Tf",
    `(${pdfText(page.subtitle)}) Tj`,
    "0 -42 Td",
    ...page.lines.flatMap((line) => [
      `(${pdfText(line)}) Tj`,
      "0 -21 Td",
    ]),
    "0 -14 Td",
    "/F1 9 Tf",
    `(${pdfText(`LANDORA STUDIO  |  ${pageNumber} / ${pages.length}`)}) Tj`,
    "ET",
  ].join("\n");

  return `<< /Length ${Buffer.byteLength(text, "ascii")} >>\nstream\n${text}\nendstream`;
}

function buildPdf() {
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    `<< /Type /Pages /Kids [${pages.map((_, index) => `${3 + index} 0 R`).join(" ")}] /Count ${pages.length} >>`,
    ...pages.map(
      (_, index) =>
        `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 ${3 + pages.length} 0 R /F2 ${4 + pages.length} 0 R >> >> /Contents ${5 + pages.length + index} 0 R >>`
    ),
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    ...pages.map((page, index) => pageStream(page, index + 1)),
  ];

  let pdf = "%PDF-1.4\n%\xE2\xE3\xCF\xD3\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(Buffer.byteLength(pdf, "binary"));
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = Buffer.byteLength(pdf, "binary");
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return Buffer.from(pdf, "binary");
}

export function GET() {
  return new Response(buildPdf(), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="landora-client-self-assessment.pdf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}