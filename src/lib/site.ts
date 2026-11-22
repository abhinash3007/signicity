// ---------------------------------------------------------------------------
// All website content lives here so it can be edited in one place.
// Images are placeholder stock photos (Unsplash). Swap `img(...)` calls for
// local paths like "/work/krone-stall.jpg" once real photos are in /public.
// ---------------------------------------------------------------------------

export const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const site = {
  name: "SigniCity",
  tagline: "We bring your vision to life.",
  description:
    "SigniCity is a marketing and brand execution partner. We plan, create and manage brand experiences across events, retail spaces, displays, gifting and on-ground activations, pan-India.",
  url: "https://signicity.com",
  email: "business@signicity.com",
  // TODO: add real details. Empty values are hidden on the site automatically.
  phone: "",
  whatsapp: "", // digits only with country code, e.g. "919876543210"
  city: "Asansol, West Bengal",
  address: {
    lines: [
      "194, Ground Floor, 5th Lane, Gurupada Sarani",
      "Gurunanak Pally, Near Bhaskar Marriage Hall",
      "Asansol, Paschim Bardhaman",
      "West Bengal 713301, India",
    ],
    street: "194, Ground Floor, 5th Lane, Gurupada Sarani, Gurunanak Pally",
    locality: "Asansol",
    region: "West Bengal",
    postalCode: "713301",
    country: "IN",
  },
  gstin: "19BYRPK1204L1Z4",
  social: {
    instagram: "",
    linkedin: "",
    facebook: "",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  headline: string;
  intro: string;
  image: string;
  gallery: string[];
  deliverables: string[];
  benefits: { title: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: "events-and-experiences",
    number: "01",
    title: "Events & Experiences",
    short: "Stalls, launches, dealer meets, zonal meets, conferences and end-to-end event management.",
    headline: "Make every interaction count.",
    intro:
      "From a product launch to a 500-seat dealer conference, we take care of the planning, production and on-ground management, so your team can focus on the people in the room.",
    image: img("1540575467063-178a50c2df87"),
    gallery: [
      img("1505373877841-8d25f7d46678", 1200),
      img("1511578314322-379afb476865", 1200),
      img("1464366400600-7168b8af9bc3", 1200),
    ],
    deliverables: [
      "Product launches & showcases",
      "Dealer, distributor & zonal meets",
      "Conferences & seminars",
      "Exhibition stalls & trade-show presence",
      "Stage, sound, light & AV production",
      "Venue sourcing, hospitality & logistics",
      "Anchors, promoters & on-ground staff",
      "Event-day management & reporting",
    ],
    benefits: [
      { title: "One accountable team", text: "A single point of contact owns the plan, vendors and run-of-show from first call to final wrap." },
      { title: "Built around your goal", text: "Whether it's dealer motivation or product trial, every element is designed to move a clear objective." },
      { title: "Calm on the day", text: "Detailed checklists, rehearsals and a dedicated on-ground crew keep surprises off your stage." },
    ],
  },
  {
    slug: "retail-and-trade-marketing",
    number: "02",
    title: "Retail & Trade Marketing",
    short: "In-store branding, product displays, POSM, sampling and visibility units.",
    headline: "Bring the brand closer to the buyer.",
    intro:
      "Most buying decisions are made at the shelf. We design, produce and install visibility solutions that help your products get noticed in salons, stores and modern-trade outlets.",
    image: img("1441986300917-64674bd600d8"),
    gallery: [
      img("1604719312566-8912e9227c6a", 1200),
      img("1521590832167-7bcbfaa6381f", 1200),
      img("1555529669-e69e7aa0ba9a", 1200),
    ],
    deliverables: [
      "Shop-in-shop & salon branding",
      "Shade-card walls & product display units",
      "Shelf strips, wobblers, danglers & POSM",
      "Glow-sign boards & backlit units",
      "In-store sampling & promoter programs",
      "Window displays & seasonal branding",
      "Retail audits & installation tracking",
      "Multi-city rollouts with partner network",
    ],
    benefits: [
      { title: "Visibility that sells", text: "Displays designed around how shoppers actually browse, compare and pick a product." },
      { title: "Built to last", text: "Material selection and finishing suited to real store conditions, not just the render." },
      { title: "Rolled out at scale", text: "Installations across cities, tracked outlet by outlet with photo proof." },
    ],
  },
  {
    slug: "creative-and-production",
    number: "03",
    title: "Creative & Production",
    short: "Concepts, design, video production, photography, editing and print.",
    headline: "Ideas that look as good as they sound.",
    intro:
      "Our creative team shapes the concept and the craft: brand visuals, campaign creatives, product photography and video that work across print, screens and spaces.",
    image: img("1561070791-2526d30994b5"),
    gallery: [
      img("1492691527719-9d1e07e534b4", 1200),
      img("1574717024653-61fd2cf4d44d", 1200),
      img("1586953208448-b95a79798f07", 1200),
    ],
    deliverables: [
      "Concept & campaign ideation",
      "Graphic design & brand collateral",
      "3D renders for stalls & displays",
      "Product & event photography",
      "Corporate films & social video",
      "Editing, motion graphics & post-production",
      "Catalogues, brochures & packaging",
      "Large-format & commercial print",
    ],
    benefits: [
      { title: "Design to delivery", text: "The people who design it also oversee production, so nothing gets lost between screen and site." },
      { title: "Consistent brand", text: "Every asset follows your brand guidelines across channels and cities." },
      { title: "Fast turnarounds", text: "In-house design with trusted print and production partners keeps timelines tight." },
    ],
  },
  {
    slug: "gifting-and-recognition",
    number: "04",
    title: "Gifting & Recognition",
    short: "Corporate gifts, festive hampers, awards, trophies, certificates and employee recognition.",
    headline: "Thoughtful details. Stronger connections.",
    intro:
      "Gifts and awards say a lot about a brand. We curate, customise and deliver festive hampers, employee gifts, trophies and certificates that people are proud to keep.",
    image: img("1549465220-1a8b9238cd48"),
    gallery: [
      img("1607344645866-009c320b63e0", 1200),
      img("1578269174936-2709b6aeb913", 1200),
      img("1513885535751-8b9238bd345a", 1200),
    ],
    deliverables: [
      "Festive hampers (Diwali, New Year & more)",
      "Custom branded gift boxes",
      "Employee joining & milestone kits",
      "Dealer & channel-partner gifting",
      "Custom trophies & awards",
      "Certificates & premium framing",
      "Branded merchandise",
      "Pan-India packing & dispatch",
    ],
    benefits: [
      { title: "Personal, at scale", text: "Name-level personalisation for hundreds of recipients, without the spreadsheet headache." },
      { title: "Quality checked", text: "Every box and award is inspected before it ships, so the first impression is the right one." },
      { title: "Delivered on time", text: "Planned around festive calendars and award nights, with tracked dispatch." },
    ],
  },
  {
    slug: "media-and-outreach",
    number: "05",
    title: "Media & Outreach",
    short: "Influencer activities, PR, radio, hoardings, print ads and digital campaigns.",
    headline: "Get the story in front of the right people.",
    intro:
      "We plan and buy media across offline and online channels, and connect brands with creators and press, so your message reaches the audience that matters.",
    image: img("1611162617213-7d7a39e9b1d7"),
    gallery: [
      img("1557838923-2985c318be48", 1200),
      img("1475721027785-f74eccf877e2", 1200),
      img("1563986768609-322da13575f3", 1200),
    ],
    deliverables: [
      "Influencer & creator campaigns",
      "PR & media relations",
      "Radio spots & RJ engagements",
      "Hoardings & outdoor media",
      "Print advertisements",
      "Social media campaigns",
      "Performance & digital ads",
      "Campaign reporting",
    ],
    benefits: [
      { title: "Right mix of channels", text: "Offline reach and online engagement planned together, not in silos." },
      { title: "Local reach", text: "City-level media planning for brands that sell region by region." },
      { title: "Clear reporting", text: "Simple post-campaign reports so you know what worked." },
    ],
  },
  {
    slug: "brand-support",
    number: "06",
    title: "Brand Support",
    short: "Celebrity management, signage, merchandise and startup consulting.",
    headline: "The extra hands your brand needs.",
    intro:
      "Beyond campaigns, we help brands with the building blocks: signage, merchandise, celebrity appearances and practical go-to-market advice for growing businesses.",
    image: img("1522071820081-009f0129c71c"),
    gallery: [
      img("1600880292203-757bb62b4baf", 1200),
      img("1542744173-8e7e53415bb0", 1200),
      img("1515169067868-5387ec356754", 1200),
    ],
    deliverables: [
      "Celebrity & influencer appearances",
      "Indoor & outdoor signage",
      "ACP, acrylic & LED letter boards",
      "Branded merchandise & uniforms",
      "Brand identity support",
      "Startup go-to-market consulting",
      "Vendor sourcing & management",
      "Annual brand-support retainers",
    ],
    benefits: [
      { title: "Flexible support", text: "Bring us in for one job or keep us on retainer as an extension of your marketing team." },
      { title: "Trusted network", text: "Vetted fabricators, printers and talent partners across India." },
      { title: "Practical advice", text: "Hands-on guidance for founders who need to launch, not just plan." },
    ],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  size?: "tall" | "wide";
};

export const workCategories = [
  "All",
  "Events",
  "Stalls & Fabrication",
  "Retail",
  "Displays",
  "Gifting",
  "Awards",
] as const;

export const projects: Project[] = [
  {
    title: "Professional haircare product showcase",
    category: "Events",
    description: "Model showcase and live product demo at a national beauty trade show.",
    image: img("1470229722913-7c0e2dbbafd3", 1200),
    size: "tall",
  },
  {
    title: "Fashion & beauty red-carpet evening",
    category: "Events",
    description: "Step-and-repeat branding, guest management and photo moments for an industry event.",
    image: img("1492684223066-81342ee5ff30", 1200),
  },
  {
    title: "Regional dealer conference",
    category: "Events",
    description: "Venue, AV, seating and agenda management for a multi-day dealer meet.",
    image: img("1511578314322-379afb476865", 1200),
    size: "wide",
  },
  {
    title: "Haircare brand exhibition stall",
    category: "Stalls & Fabrication",
    description: "Custom-fabricated stall with backlit graphics, stage, mirrors and lounge seating.",
    image: img("1587825140708-dfaf72ae4b04", 1200),
    size: "wide",
  },
  {
    title: "Trade-show stage & demo zone",
    category: "Stalls & Fabrication",
    description: "Raised stage, vanity mirrors and branded walls for live styling demos.",
    image: img("1560523159-4a9692d222ef", 1200),
  },
  {
    title: "Salon shade-card wall",
    category: "Retail",
    description: "Illuminated colour shade wall for a professional hair-colour range.",
    image: img("1521590832167-7bcbfaa6381f", 1200),
    size: "tall",
  },
  {
    title: "In-store visibility programme",
    category: "Retail",
    description: "Shelf branding and POSM installed across a multi-store network.",
    image: img("1604719312566-8912e9227c6a", 1200),
  },
  {
    title: "Counter-top product display units",
    category: "Displays",
    description: "Acrylic and MDF counter displays designed for skincare and fragrance ranges.",
    image: img("1522335789203-aabd1fc54bc9", 1200),
  },
  {
    title: "Backlit shelf display",
    category: "Displays",
    description: "LED-lit shelving unit built for premium product placement.",
    image: img("1596462502278-27bfdc403348", 1200),
  },
  {
    title: "Diwali corporate hampers",
    category: "Gifting",
    description: "Custom festive boxes with dry fruits, diyas and branded greeting cards.",
    image: img("1607344645866-009c320b63e0", 1200),
    size: "wide",
  },
  {
    title: "Festive gift boxes for channel partners",
    category: "Gifting",
    description: "Hexagonal premium boxes, packed and dispatched to partners across regions.",
    image: img("1549465220-1a8b9238cd48", 1200),
  },
  {
    title: "Annual sales awards",
    category: "Awards",
    description: "Personalised trophies for top performers at a national sales meet.",
    image: img("1578269174936-2709b6aeb913", 1200),
  },
  {
    title: "Long-service milestone frames",
    category: "Awards",
    description: "Printed certificates with premium framing for employee anniversaries.",
    image: img("1513885535751-8b9238bd345a", 1200),
  },
];

export const process = [
  { number: "01", title: "Understand", text: "We learn the brand, audience, goal, budget and timeline." },
  { number: "02", title: "Plan", text: "We shape the idea, scope, design, materials and execution plan." },
  { number: "03", title: "Create", text: "We manage production, vendors, quality checks and logistics." },
  { number: "04", title: "Deliver", text: "We execute on-ground and stay close until the work is complete." },
];

// Brands shown in the portfolio deck. Confirm you have permission before listing them publicly.
export const clients = [
  "L'Oréal Professionnel",
  "Matrix",
  "Godrej Professional",
  "Raaga Professional",
  "Krone Professional",
  "Indica Professional",
  "CavinKare",
  "Lotus",
  "Motherson",
  "CNH Industrial",
];

export const highlights = [
  { value: "6", label: "Service verticals under one roof" },
  { value: "Pan-India", label: "Execution through a partner network" },
  { value: "1", label: "Accountable point of contact" },
  { value: "360°", label: "From concept to on-ground delivery" },
];

export const reasons = [
  { title: "One partner, end to end", text: "Strategy, design, production and execution under one roof — fewer handoffs, fewer gaps." },
  { title: "Execution-first thinking", text: "Every idea is planned around materials, budgets and timelines that actually work on the ground." },
  { title: "Quality at every step", text: "Samples, checks and site supervision so what's delivered matches what was approved." },
  { title: "Transparent costing", text: "Clear, itemised estimates up front. No surprises on the final invoice." },
  { title: "Pan-India reach", text: "A trusted network of fabricators, printers and crews lets us deliver across cities." },
  { title: "Built for brands of every size", text: "From a single display unit to a multi-city campaign, the same care goes into every job." },
];

export const industries = [
  "Beauty & professional haircare",
  "FMCG & personal care",
  "Automotive & manufacturing",
  "Corporate & enterprise",
  "Retail & lifestyle",
  "Startups & D2C brands",
];

export const faqs = [
  {
    q: "Where are you based? Do you work outside your city?",
    a: "We're based in Asansol, West Bengal, and work across Asansol, Durgapur, Kolkata and the rest of India. Outside West Bengal we execute through a network of trusted fabrication, print and on-ground partners, managed centrally by our team.",
  },
  {
    q: "What is the typical lead time for a project?",
    a: "Small print or gifting jobs can turn around in days. Exhibition stalls typically need 2–4 weeks, and larger events or multi-city rollouts are planned 4–8 weeks ahead.",
  },
  {
    q: "Can you work with our existing designs?",
    a: "Absolutely. We can produce from your artwork, adapt it to new formats, or create concepts from scratch.",
  },
  {
    q: "Is there a minimum project size?",
    a: "No. We handle everything from a single display unit to full events — tell us what you need and we'll suggest the best approach.",
  },
];
