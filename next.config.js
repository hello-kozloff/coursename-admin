/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'habrastorage.org'
    ]
  }
}

module.exports = nextConfig
