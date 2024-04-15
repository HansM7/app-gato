/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "marketplace.canva.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
