// Yatra packages, transcribed from the client's own rates.
//
// Two details were not specified by the client and are marked with
// `needsConfirmation` rather than invented. The UI degrades gracefully and
// shows "confirmed when you book" instead of a made-up number:
//   1. Package 1 has no stated duration.
//   2. Package 2 is quoted as "same as above" without repeating the route.
// Replace the nulls once the client confirms, and the pages fill themselves in.

// The same group size applies to every package, not a per-package figure, so
// it lives here once rather than repeated on each object below. Shown on the
// package detail page's meta row and quick facts, and sets the min/max on the
// traveller count field in PackageBookingCard.
export const packageGroupSize = { min: 4, max: 20 };

export const packages = [
  {
    slug: "grand-yatra",
    name: "Grand Yatra",
    order: 1,
    pricePerPerson: 16500,
    duration: null,
    needsConfirmation: ["duration"],
    image: "/images/prayagraj.jpg",
    imageAlt: "Boats at the Triveni Sangam in Prayagraj",
    summary:
      "The full northern circuit from Kasi, taking in Prayagraj, Ayodhya, Naimisaranyam, Mathura and Agra.",
    places: ["Kasi", "Prayagraj", "Ayodhya", "Naimisaranyam", "Mathura", "Agra"],
    stay: "Twin sharing air-conditioned rooms",
    meals:
      "Breakfast, lunch and dinner in Kasi. Lunch and evening dinner on outstation days.",
    inclusions: [
      "Twin sharing air-conditioned rooms",
      "All meals in Kasi, lunch and dinner outstation",
      "Ganga boat cruise",
      "Local autos and transfers",
      "All taxes included",
    ],
    exclusions: ["Special darshan tickets"],
  },
  {
    slug: "kasi-yatra",
    name: "Kasi Yatra",
    order: 2,
    pricePerPerson: 13500,
    duration: "5 Days / 6 Nights",
    needsConfirmation: ["places"],
    image: "/images/ganga-aarti.jpg",
    imageAlt: "Evening Ganga aarti on the ghats at Varanasi",
    summary:
      "The same rooms and the same meals as the Grand Yatra, over a shorter five day route.",
    places: null,
    stay: "Twin sharing air-conditioned rooms",
    meals:
      "Breakfast, lunch and dinner in Kasi. Lunch and evening dinner on outstation days.",
    inclusions: [
      "Twin sharing air-conditioned rooms",
      "All meals in Kasi, lunch and dinner outstation",
      "Ganga boat cruise",
      "Local autos and transfers",
      "All taxes included",
    ],
    exclusions: ["Special darshan tickets"],
  },
  {
    slug: "prayag-ayodhya-gaya",
    name: "Prayag, Ayodhya and Gaya",
    order: 3,
    pricePerPerson: 12500,
    duration: "5 Days / 6 Nights",
    needsConfirmation: [],
    image: "/images/gaya.jpg",
    imageAlt: "Vishnupad temple at Gaya",
    summary:
      "A bed and breakfast package across three room categories, for families who prefer to arrange their own meals on the road.",
    places: ["Kasi", "Prayagraj", "Ayodhya", "Gaya"],
    stay: "Three room categories to choose from",
    meals: "Bed and breakfast",
    inclusions: [
      "Room in your chosen category",
      "Breakfast each morning",
      "Three room categories to choose from",
    ],
    exclusions: ["Lunch and dinner", "Special darshan tickets"],
  },
];

export function getPackage(slug) {
  return packages.find((p) => p.slug === slug) ?? null;
}
