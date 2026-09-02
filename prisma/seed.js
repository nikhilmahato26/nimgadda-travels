import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

import { business } from "../data/business.js";
import { rooms } from "../data/rooms.js";
import { packages } from "../data/packages.js";
import { fleetGroups } from "../data/fleet.js";
import { destinations } from "../data/destinations.js";

/*
  Loads the static content in /data into the database. Idempotent: every write
  is an upsert keyed on slug, so running it again after editing a file in /data
  updates the row rather than duplicating it.

  Usage:
    DATABASE_URL=... npx prisma db push
    DATABASE_URL=... node prisma/seed.js
*/

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error("DATABASE_URL is not set. Nothing to seed.");
  process.exit(1);
}

const pool = new Pool({ connectionString });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

async function main() {
  // Flat, editable values (name, phone, tagline) live in SiteSetting so they
  // can be changed without a deploy.
  const settings = {
    name: business.name,
    shortName: business.shortName,
    tagline: business.tagline,
    phoneDisplay: business.phoneDisplay,
    phoneTel: business.phoneTel,
    whatsappNumber: business.whatsappNumber,
  };

  for (const [key, value] of Object.entries(settings)) {
    await prisma.siteSetting.upsert({
      where: { key },
      update: { value },
      create: { key, value },
    });
  }
  console.log(`Seeded ${Object.keys(settings).length} site settings`);

  for (const [i, room] of rooms.entries()) {
    const { slug, ...rest } = room;
    const data = { ...rest, order: i };
    await prisma.room.upsert({
      where: { slug },
      update: data,
      create: { slug, ...data },
    });
  }
  console.log(`Seeded ${rooms.length} rooms`);

  for (const pkg of packages) {
    const { slug, order, ...rest } = pkg;
    const data = { ...rest, order };
    await prisma.package.upsert({
      where: { slug },
      update: data,
      create: { slug, ...data },
    });
  }
  console.log(`Seeded ${packages.length} packages`);

  for (const [i, group] of fleetGroups.entries()) {
    const { slug, ...rest } = group;
    const data = { ...rest, order: i };
    await prisma.fleetGroup.upsert({
      where: { slug },
      update: data,
      create: { slug, ...data },
    });
  }
  console.log(`Seeded ${fleetGroups.length} fleet groups`);

  for (const [i, place] of destinations.entries()) {
    const { slug, ...rest } = place;
    const data = { ...rest, order: i };
    await prisma.destination.upsert({
      where: { slug },
      update: data,
      create: { slug, ...data },
    });
  }
  console.log(`Seeded ${destinations.length} destinations`);
}

main()
  .then(() => console.log("Done."))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
