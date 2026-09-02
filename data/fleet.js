// The trust's vehicles, grouped by how many people travel together. Grouping
// beats a flat ten row spec table: families pick by group size, not by model.

export const fleetGroups = [
  {
    slug: "small",
    label: "Families and small groups",
    range: "4 to 7 seats",
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
    vehicles: [{ name: "Glass pack bus", seats: 49 }],
  },
];

export const totalVehicleTypes = fleetGroups.reduce(
  (n, g) => n + g.vehicles.length,
  0
);
