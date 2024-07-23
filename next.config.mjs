/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" },
      { hostname: "res.cloudinary.com" },
    ],
  },
  experimental: {
    outputFileTracingIncludes: {
      "/": ["./node_modules/argon2/prebuilds/linux-x64/*.musl.*"],
    },
  },
};

export default nextConfig;
