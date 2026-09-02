const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nimmagaddavari.in";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/credits" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
