// Single source of truth for the trust's identity and contact details.
// Every value here comes from the client. Seeded into SiteSetting when a
// DATABASE_URL is configured (see prisma/seed.js).

export const business = {
  name: "Nimmagadda Vari Charitable Trust",
  shortName: "Nimmagadda Vari",
  tagline: "Deluxe rooms and travels in Kasi, with Andhra food",
  circuit: ["Kasi", "Tirupathi", "Arunachalam"],

  trustee: {
    name: "T. N. Venkata Krishna",
    role: "Trust Member",
  },

  phoneDisplay: "+91 72079 35649",
  phoneTel: "tel:+917207935649",
  whatsappNumber: "917207935649",

  address: {
    line1: "28/193, Panday Haweli",
    line2: "Next to Cycle Baba Ashram",
    city: "Varanasi (Kasi)",
    state: "Uttar Pradesh",
    pincode: "221001",
  },

  // Used for the "get directions" link and the contact page map link.
  mapsQuery: "Panday Haweli, Varanasi, Uttar Pradesh 221001",

  nav: [
    { label: "Rooms", href: "/rooms" },
    { label: "Packages", href: "/packages" },
    { label: "Travels", href: "/travels" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export const addressLines = [
  business.address.line1,
  business.address.line2,
  `${business.address.city} ${business.address.pincode}`,
];

export const addressOneLine = [
  business.address.line1,
  business.address.line2,
  business.address.city,
  business.address.pincode,
].join(", ");
