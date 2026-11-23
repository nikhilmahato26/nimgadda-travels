// Yatra packages, transcribed from the client's own rates.
//
// Two details were not specified by the client and are marked with
// `needsConfirmation` rather than invented. The UI degrades gracefully and
// shows "confirmed when you book" instead of a made-up number:
//   1. Package 1 has no stated duration.
//   2. Package 2 is quoted as "same as above" without repeating the route.
// Replace the nulls once the client confirms, and the pages fill themselves in.

// The same group size applies to every package, not a per-package figure, so
// it lives here once rather than repeated on each object below. Shown on
// every package card, the detail page's meta row and quick facts, and sets
// the min/max on the traveller count field in PackageBookingCard.
export const packageGroupSize = { min: 6, max: 150 };

// Per person package prices by room category, as quoted by the client
// (23 Nov 2026). Like the group size these apply to every package, so they
// live here once. Each price includes all taxes, breakfast, lunch, dinner and
// transport. Cheapest first: the first tier is the "from" price on cards, and
// each package's `pricePerPerson` below mirrors it so the seeded DB row and
// structured data stay valid without a schema change.
// The client said "Premium stay"; it is mapped to the Super Deluxe room.
export const packageStayTiers = [
  {
    id: "ac",
    name: "AC Room",
    detail: "With lift access and car parking",
    roomSlug: "ac-room",
    pricePerPerson: 13500,
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    detail: "Deluxe category room",
    roomSlug: "deluxe",
    pricePerPerson: 16500,
  },
  {
    id: "premium",
    name: "Premium Stay",
    detail: "Super Deluxe room",
    roomSlug: "super-deluxe",
    pricePerPerson: 18500,
  },
];

const fromPrice = packageStayTiers[0].pricePerPerson;

const allInclusive = {
  stay: "AC, Deluxe or Premium room, your choice",
  meals: "Breakfast, lunch and dinner every day",
  inclusions: [
    "Room in your chosen category",
    "Breakfast, lunch and dinner",
    "Vehicle transport throughout",
    "All taxes included",
  ],
  exclusions: ["Special darshan tickets"],
};

// The Kasi-based circuits also had the boat cruise and local autos in the
// client's original quote; the Gaya package never listed them.
const kasiExtras = {
  ...allInclusive,
  inclusions: [
    ...allInclusive.inclusions.slice(0, -1),
    "Ganga boat cruise",
    "Local autos and transfers",
    "All taxes included",
  ],
};

export const packages = [
  {
    slug: "grand-yatra",
    name: "Grand Yatra",
    order: 1,
    pricePerPerson: fromPrice,
    duration: null,
    needsConfirmation: ["duration"],
    image: "/images/prayagraj.jpg",
    imageAlt: "Boats at the Triveni Sangam in Prayagraj",
    summary:
      "The full northern circuit from Kasi, taking in Prayagraj, Ayodhya, Naimisaranyam, Mathura and Agra.",
    places: ["Kasi", "Prayagraj", "Ayodhya", "Naimisaranyam", "Mathura", "Agra"],
    ...kasiExtras,
  },
  {
    slug: "kasi-yatra",
    name: "Kasi Yatra",
    order: 2,
    pricePerPerson: fromPrice,
    duration: "5 Days / 6 Nights",
    needsConfirmation: ["places"],
    image: "/images/ganga-aarti.jpg",
    imageAlt: "Evening Ganga aarti on the ghats at Varanasi",
    summary:
      "The same rooms and the same meals as the Grand Yatra, over a shorter five day route.",
    places: null,
    ...kasiExtras,
  },
  {
    slug: "prayag-ayodhya-gaya",
    name: "Prayag, Ayodhya and Gaya",
    order: 3,
    pricePerPerson: fromPrice,
    duration: "5 Days / 6 Nights",
    needsConfirmation: [],
    image: "/images/gaya.jpg",
    imageAlt: "Vishnupad temple at Gaya",
    summary:
      "Kasi, Prayagraj, Ayodhya and Gaya over five days, with every meal and the vehicle arranged for you.",
    places: ["Kasi", "Prayagraj", "Ayodhya", "Gaya"],
    ...allInclusive,
  },
];

export function getPackage(slug) {
  return packages.find((p) => p.slug === slug) ?? null;
}
