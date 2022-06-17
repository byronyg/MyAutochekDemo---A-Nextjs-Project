/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "https://api.staging.myautochek.com",
      "storage.googleapis.com",
      "www.flaticon.com",
      "media.autochek.africa",
      "images.unsplash.com"
    ],
  },
};

module.exports = nextConfig;
