// The trust's vehicles, grouped by how many people travel together. Grouping
// beats a flat ten row spec table: families pick by group size, not by model.
//
// Each group carries one representative photograph. These are stock photos of
// the vehicle type, not of the trust's own vehicles; swap them for the real
// ones when the client sends photographs of the fleet.

export const fleetGroups = [
  {
    slug: "small",
    label: "Families and small groups",
    range: "4 to 7 seats",
    image: "/images/fleet-car.jpg",
    imageAlt: "A Toyota Innova Crysta, the seven seater used for small groups",
    vehicles: [
      { name: "Swift Dzire", seats: 4 },
      { name: "Tavera", seats: 6 },
      { name: "Ertiga", seats: 6 },
      { name: "Innova Crysta", seats: 7 },
    ],
  },
  {
    slug: "medium",
    label: "Extended families",
    range: "9 to 17 seats",
    image: "/images/fleet-traveller.jpg",
    imageAlt: "A Force Traveller minibus of the kind used for larger families",
    vehicles: [
      { name: "Wings", seats: 9 },
      { name: "Cruiser", seats: 12 },
      { name: "Urbania", seats: "12 and 17" },
      { name: "Maharaja", seats: 15 },
      { name: "Tempo Traveller", seats: "17, 20 and 26" },
    ],
  },
  {
    slug: "large",
    label: "Temple groups and sanghams",
    range: "Up to 49 seats",
    image: "/images/fleet-bus.jpg",
    imageAlt: "A long distance coach of the kind used for temple groups",
    vehicles: [{ name: "Glass pack bus", seats: 49 }],
  },
];

export const totalVehicleTypes = fleetGroups.reduce(
  (n, g) => n + g.vehicles.length,
  0
);
