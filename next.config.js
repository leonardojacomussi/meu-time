/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    formats: ["image/avif", "image/webp"],
    domains: [
      "media.api-sports.io",
      "media-1.api-sports.io",
      "media-2.api-sports.io",
      "media-3.api-sports.io",
      "media-4.api-sports.io",
      "media-5.api-sports.io",
      "media-6.api-sports.io",
      "media-7.api-sports.io",
      "media-8.api-sports.io",
      "media-9.api-sports.io",
      "media-10.api-sports.io",
    ]
  },
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
}

module.exports = nextConfig
