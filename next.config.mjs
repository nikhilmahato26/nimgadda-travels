/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // All photography is served from /public, so no remote hosts are allowed.
    // If the trust later uploads room photos to a CDN, add that host here.
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
