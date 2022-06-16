/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "https://api.staging.myautochek.com",
      "storage.googleapis.com",
      "www.flaticon.com",
    ],
  },
};

module.exports = nextConfig;
