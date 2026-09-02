// The trust's vehicles, one entry per vehicle, ordered by how many people it
// seats. Families pick by group size, so `seats` leads on every card.
//
// The photographs are stock images of each vehicle type, not the trust's own
// vehicles. Replace them with real photographs of the fleet when the client
// sends them: keep the same file names and nothing else has to change.
//
// `image: null` renders a labelled placeholder rather than a broken tile, the
// same pattern the room cards use. Only the Urbania is missing a photograph:
// it is a recent model with nothing openly licensed available, so it is the
// first vehicle to photograph.

export const vehicles = [
  {
    slug: "swift-dzire",
    name: "Swift Dzire",
    seats: "4 seats",
    seatCount: 4,
    bestFor: "A couple or a small family",
    description:
      "A sedan for two or three travelling with normal luggage. The usual choice for station pickups and a day around the city.",
    image: "/images/fleet-dzire.jpg",
    imageAlt: "A Maruti Suzuki Dzire sedan",
  },
  {
    slug: "tavera",
    name: "Tavera",
    seats: "6 seats",
    seatCount: 6,
    bestFor: "Six with luggage",
    description:
      "A sturdy older workhorse with room for six and boot space for a week of bags.",
    image: "/images/fleet-tavera.jpg",
    imageAlt: "A Chevrolet Tavera",
  },
  {
    slug: "ertiga",
    name: "Ertiga",
    seats: "6 seats",
    seatCount: 6,
    bestFor: "Comfort on shorter runs",
    description:
      "Lighter and easier riding than the Tavera, good for a family of five or six on the shorter outstation days.",
    image: "/images/fleet-ertiga.jpg",
    imageAlt: "A Maruti Suzuki Ertiga",
  },
  {
    slug: "innova-crysta",
    name: "Innova Crysta",
    seats: "7 seats",
    seatCount: 7,
    bestFor: "Long days on the road",
    description:
      "The one most families ask for on the Prayagraj and Ayodhya runs. Seven seats and a ride that elders manage well over a long day.",
    image: "/images/fleet-innova.jpg",
    imageAlt: "A Toyota Innova Crysta",
  },
  {
    slug: "wings",
    name: "Wings",
    seats: "9 seats",
    seatCount: 9,
    bestFor: "Two families together",
    description:
      "A nine seater van for when one car is not enough and a tempo traveller is more than you need.",
    image: "/images/fleet-winger.jpg",
    imageAlt: "A Tata Winger nine seater van",
  },
  {
    slug: "cruiser",
    name: "Cruiser",
    seats: "12 seats",
    seatCount: 12,
    bestFor: "A dozen travelling together",
    description:
      "Twelve seats, straightforward and hard wearing, for groups who want everyone in one vehicle.",
    image: "/images/fleet-cruiser.jpg",
    imageAlt: "A Force Motors Trax Cruiser",
  },
  {
    slug: "urbania",
    name: "Urbania",
    seats: "12 and 17 seats",
    seatCount: 13,
    bestFor: "The most comfortable van",
    description:
      "The newest van in the fleet, in twelve and seventeen seat layouts, with the most comfortable seating of the group vehicles.",
    image: null,
    imageAlt: null,
  },
  {
    slug: "maharaja",
    name: "Maharaja",
    seats: "15 seats",
    seatCount: 15,
    bestFor: "Fifteen in one vehicle",
    description:
      "A fifteen seater for extended families who want to travel as one group rather than split across cars.",
    image: "/images/fleet-maharaja.jpg",
    imageAlt: "A luxury Force Traveller minibus",
  },
  {
    slug: "tempo-traveller",
    name: "Tempo Traveller",
    seats: "17, 20 and 26 seats",
    seatCount: 20,
    bestFor: "Large family groups",
    description:
      "Available in seventeen, twenty and twenty six seat layouts. The workhorse of the yatra routes.",
    image: "/images/fleet-traveller.jpg",
    imageAlt: "A Force Traveller minibus",
  },
  {
    slug: "glass-pack-bus",
    name: "Glass pack bus",
    seats: "49 seats",
    seatCount: 49,
    bestFor: "Temple groups and sanghams",
    description:
      "Forty nine seats for a full sangham travelling together, with luggage stowed underneath.",
    image: "/images/fleet-bus.jpg",
    imageAlt: "A long distance coach bus",
  },
];

export const totalVehicles = vehicles.length;
