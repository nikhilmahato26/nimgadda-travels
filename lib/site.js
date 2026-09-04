export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.nimmagaddavariandhratoursandtravels.com";

export function absoluteUrl(path = "") {
  if (!path) return SITE_URL;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}
