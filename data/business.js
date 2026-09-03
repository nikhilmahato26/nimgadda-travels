// Single source of truth for the business's identity and contact details.
// Every value here comes from the client. Seeded into SiteSetting when a
// DATABASE_URL is configured (see prisma/seed.js).
//
// This is a private travel business, not the family's charitable trust
// (a separate entity) - the client asked explicitly that the trust's name
// not appear here. "Proprietor" is our own default for the owner's role
// since the client didn't specify one; change it if there's a preferred
// title (Managing Partner, Owner, and so on).

export const business = {
  name: "Nimmagadda Vari Andhra Tours and Travels",
  shortName: "Nimmagadda Vari",
  tagline: "Deluxe rooms and travels in Kasi, with Andhra food",
  circuit: ["Kasi", "Tirupathi", "Arunachalam"],

  owner: {
    name: "T. N. Venkata Krishna",
    role: "Proprietor",
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
