import { business as staticBusiness } from "@/data/business";
import { rooms as staticRooms } from "@/data/rooms";
import { packages as staticPackages } from "@/data/packages";
import { fleetGroups as staticFleet } from "@/data/fleet";
import { destinations as staticDestinations } from "@/data/destinations";

/*
  The seam between the static site and the seeded database.

  Right now there is no DATABASE_URL, so every getter returns the files in
  /data and the whole site prerenders as static HTML. Once the env is set and
  `npx prisma db push && node prisma/seed.js` has run, these getters read the
  database instead. Pages never change: they only ever call this module.

  Any database failure falls back to the static content rather than 500ing,
  so a bad connection string degrades to the site as it stands today.
*/

const hasDatabase = () => Boolean(process.env.DATABASE_URL);

async function fromDb(read, fallback) {
  if (!hasDatabase()) return fallback;
  try {
    const { db } = await import("./db");
    const rows = await read(db);
    // An empty table means "not seeded yet", not "the trust has no rooms".
    if (!rows || (Array.isArray(rows) && rows.length === 0)) return fallback;
    return rows;
  } catch (error) {
    console.error("[content] falling back to static data:", error.message);
    return fallback;
  }
}

export async function getBusiness() {
  const rows = await fromDb(
    (db) => db.siteSetting.findMany(),
    null
  );
  if (!rows) return staticBusiness;

  const overrides = Object.fromEntries(rows.map((r) => [r.key, r.value]));
  return { ...staticBusiness, ...overrides };
}

export async function getRooms() {
  return fromDb(
    (db) => db.room.findMany({ orderBy: { order: "asc" } }),
    staticRooms
  );
}

export async function getRoomBySlug(slug) {
  const all = await getRooms();
  return all.find((r) => r.slug === slug) ?? null;
}

export async function getPackages() {
  return fromDb(
    (db) => db.package.findMany({ orderBy: { order: "asc" } }),
    staticPackages
  );
}

export async function getPackageBySlug(slug) {
  const all = await getPackages();
  return all.find((p) => p.slug === slug) ?? null;
}

export async function getFleetGroups() {
  return fromDb(
    (db) => db.fleetGroup.findMany({ orderBy: { order: "asc" } }),
    staticFleet
  );
}

export async function getDestinations() {
  return fromDb(
    (db) => db.destination.findMany({ orderBy: { order: "asc" } }),
    staticDestinations
  );
}
