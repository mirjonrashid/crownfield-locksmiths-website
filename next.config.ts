/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 this enables static export
  trailingSlash: true, // helps with static hosting
  images: {
    unoptimized: true, // required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
