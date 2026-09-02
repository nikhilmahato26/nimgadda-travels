// Room types. Photography for the rooms themselves is still with the client,
// so `image` is null here and the UI falls back to a typographic tile. Drop the
// real photo into /public/images/rooms/ and set the path to light them up.

export const roomAmenities = [
  "Air conditioning",
  "Hot water round the clock",
  "LED television",
  "Wi-Fi",
  "Lift access",
  "Car parking",
];

export const rooms = [
  {
    slug: "deluxe",
    name: "Deluxe Room",
    summary:
      "A comfortable air-conditioned room for couples and small families, a short walk from the Kashi Vishwanath temple.",
    occupancy: "2 guests, twin sharing",
    image: null,
    amenities: [
      "Air conditioning",
      "Hot water round the clock",
      "LED television",
      "Wi-Fi",
      "Lift access",
    ],
  },
  {
    slug: "super-deluxe",
    name: "Super Deluxe Room",
    summary:
      "More floor space and a larger bathroom, suited to families travelling with elders who want room to move.",
    occupancy: "2 to 3 guests",
    image: null,
    amenities: [
      "Air conditioning",
      "Hot water round the clock",
      "LED television",
      "Wi-Fi",
      "Lift access",
      "Extra bed on request",
    ],
  },
];

// The four things guests ask about before anything else.
export const stayHighlights = [
  {
    title: "Walking distance to the temple",
    body: "Panday Haweli sits inside the old city, close enough to Kashi Vishwanath that elders can walk it.",
  },
  {
    title: "Lift and car parking",
    body: "No stairs to climb with luggage, and the vehicle stays parked at the building.",
  },
  {
    title: "Andhra meals",
    body: "Rice, pappu, pachadi and rasam cooked the way you eat at home, not hotel food.",
  },
  {
    title: "Run by a trust",
    body: "A charitable trust looking after pilgrims, not a booking agent taking a cut.",
  },
];
