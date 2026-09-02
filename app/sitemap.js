import { getPackages } from "@/lib/content";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nimmagaddavari.in";

export default async function sitemap() {
  const packages = await getPackages();
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/rooms", priority: 0.9 },
    { path: "/packages", priority: 0.9 },
    { path: "/travels", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.7 },
  ].map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));

  const packageRoutes = packages.map((p) => ({
    url: `${SITE_URL}/packages/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...packageRoutes];
}
