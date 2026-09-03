// The three room categories, in ascending order. All three now have real
// photos.
//
// `gallery` is an array of photo paths. If a room's array is ever emptied out
// (a new category added, a room dropped for renovation), its tiles fall back
// to a typographic panel rather than a broken image. To add or replace
// photos for a room:
//
//   1. Drop the files straight into /public/images/ (flat, same folder as
//      every other photo on the site, e.g. kashi-temple.jpg, fleet-dzire.jpg
//      - there is no /rooms subfolder).
//   2. Name them room-<slug>-<n>.jpg, matching the room's `slug` below and
//      counting from 1: room-ac-room-1.jpg, room-ac-room-2.jpg, and so on.
//      Any orientation works, but check it renders upright first - several
//      of the photos already on the site came in sideways from WhatsApp and
//      needed rotating before use, and one had a bystander caught in the
//      frame and was cropped before it went up. At least 1200px on the long
//      edge.
//   3. Add each path to that room's `gallery` array below, in the order they
//      should appear. One photo renders as a single image; two or more
//      automatically become a slider, on the home page card and on the
//      room's own page, with no other code to touch.
//
// This is also the ONLY step needed when the database goes live. seed.js
// spreads every field of these objects straight into the Room table, so
// whatever sits in `gallery` here becomes the DB value verbatim the next
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
    gallery: [
      "/images/room-ac-room-1.jpg",
      "/images/room-ac-room-2.jpg",
      "/images/room-ac-room-3.jpg",
    ],
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
    gallery: [
      "/images/room-deluxe-1.jpg",
      "/images/room-deluxe-2.jpg",
      "/images/room-deluxe-3.jpg",
      "/images/room-deluxe-4.jpg",
    ],
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
    gallery: [
      "/images/room-super-deluxe-1.jpg",
      "/images/room-super-deluxe-2.jpg",
      "/images/room-super-deluxe-3.jpg",
      "/images/room-super-deluxe-4.jpg",
      "/images/room-super-deluxe-5.jpg",
      "/images/room-super-deluxe-6.jpg",
      "/images/room-super-deluxe-7.jpg",
    ],
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
    title: "One family, not an agency",
    body: "The rooms, the kitchen and the vehicles are all run by the same family, not resold by a booking agent taking a cut.",
  },
];

// Real, non-negotiated facts about how a booking actually runs here. Shown as
// the "Policies" tab on a room page - honest substitutes for the cancellation
// grids and instant-book terms a hotel OTA template would show, since none of
// that machinery exists: booking is a phone call, not a checkout flow.
export const roomPolicies = [
  {
    title: "How a booking is confirmed",
    body: "By phone or WhatsApp, not an online payment. Tell us your dates and the room is held once you confirm.",
  },
  {
    title: "Rates",
    body: "Quoted when you call, because they change with the season and with how many nights you stay. Guests on a yatra package already have the room in the package price.",
  },
  {
    title: "Check-in and check-out",
    body: "Arranged directly with us around your train or bus timing. Late night arrivals are fine, somebody is awake.",
  },
  {
    title: "Changes to your stay",
    body: "Call us directly. The same people who took the booking can change it.",
  },
];

// Shown alongside the room's own photographs (or in place of them, for a room
// not yet photographed): the surroundings, so the page still shows something
// real rather than a placeholder-only page.
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
