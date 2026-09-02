// The three room categories the trust offers, in ascending order.
//
// Photography of the rooms themselves is still with the client, so `image` is
// null and the room tiles fall back to a typographic panel. To add a photo:
//
//   1. Drop the file straight into /public/images/ (flat, same folder as
//      every other photo on the site, e.g. kashi-temple.jpg, fleet-dzire.jpg
//      - there is no /rooms subfolder).
//   2. Name it room-<slug>.jpg, matching the room's `slug` below:
//        room-ac-room.jpg, room-deluxe.jpg, room-super-deluxe.jpg
//      Landscape, at least 1600px wide (matches the crop these cards use:
//      4:3 here on the home page, 4:3 again on its own /rooms/<slug> page).
//   3. Change that room's `image: null` below to the matching
//      "/images/room-<slug>.jpg" string. Nothing else needs to change: the
//      room card, the detail page and the placeholder fallback all already
//      key off this one field.
//
// This is also the ONLY step needed when the database goes live. seed.js
// spreads every field of these objects straight into the Room table, so
// whatever path sits in `image` here becomes the DB value verbatim the next
// time `npm run db:seed` runs - there is no separate image pipeline to wire
// up, and no code in lib/content.js, the Prisma schema, or any room
// component needs to change either now or then.
//
// No room rates were supplied, only the per person package prices, so the
// pages ask guests to call rather than printing a number nobody quoted.

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
    slug: "ac-room",
    name: "AC Room",
    tagline: "The room most families book",
    occupancy: "2 guests, twin sharing",
    image: null, // -> "/images/room-ac-room.jpg"
    summary:
      "An air-conditioned room with lift access and car parking, close enough to Kashi Vishwanath that elders can walk to darshan.",
    description: [
      "This is the category most families take. It is air-conditioned, it is on a floor the lift reaches, and the vehicle stays parked at the building rather than somewhere down the lane.",
      "The building is in Panday Haweli, inside the old city next to Cycle Baba Ashram. That matters more than anything else on this page: you can walk to the temple and walk back for lunch.",
    ],
    amenities: [
      "Air conditioning",
      "Hot water round the clock",
      "LED television",
      "Wi-Fi",
      "Lift access",
      "Car parking",
    ],
  },
  {
    slug: "deluxe",
    name: "Deluxe Room",
    tagline: "More room to spread out",
    occupancy: "2 to 3 guests",
    image: null, // -> "/images/room-deluxe.jpg"
    summary:
      "The same location and the same comforts, in a larger room for families who want more space than the base category.",
    description: [
      "A step up in floor space from the AC Room, with the same air conditioning, hot water, television and Wi-Fi. Worth taking if there are three of you, or if you are staying several nights rather than one.",
      "Like every room here, it has lift access and parking at the building, and it is the same short walk to Kashi Vishwanath.",
    ],
    amenities: [
      "Air conditioning",
      "Hot water round the clock",
      "LED television",
      "Wi-Fi",
      "Lift access",
      "Car parking",
      "Extra bed on request",
    ],
  },
  {
    slug: "super-deluxe",
    name: "Super Deluxe Room",
    tagline: "Best for elders and longer stays",
    occupancy: "2 to 4 guests",
    image: null, // -> "/images/room-super-deluxe.jpg"
    summary:
      "Our largest category, with a bigger bathroom, suited to families travelling with elders who need room to move.",
    description: [
      "The largest of the three, with more floor space and a larger bathroom. Families travelling with elderly parents usually take this one, because there is room to move around the bed and the bathroom is easier to manage.",
      "It takes an extra bed comfortably, so a family of four can stay together rather than splitting across two rooms.",
    ],
    amenities: [
      "Air conditioning",
      "Hot water round the clock",
      "LED television",
      "Wi-Fi",
      "Lift access",
      "Car parking",
      "Extra bed on request",
      "Larger bathroom",
    ],
  },
];

export function getRoom(slug) {
  return rooms.find((r) => r.slug === slug) ?? null;
}

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

// Shown on each room page: the surroundings, since the rooms themselves are not
// photographed yet. Clearly framed as the neighbourhood, not the property.
export const neighbourhood = [
  {
    image: "/images/kashi-vishwanath.jpg",
    alt: "The Vishwanath Gate entrance to the Kashi Vishwanath temple",
    caption: "Kashi Vishwanath, a walk from the building",
  },
  {
    image: "/images/ganga-aarti.jpg",
    alt: "Priests performing the evening Ganga aarti at Varanasi",
    caption: "The evening aarti at Dashashwamedh Ghat",
  },
  {
    image: "/images/assi-ghat.jpg",
    alt: "Temples in the lanes near Assi Ghat, Varanasi",
    caption: "Temples in the lanes of the old city",
  },
];
