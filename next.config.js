/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com'
      }
    ],
    domains: ['images.prismic.io']
  }
}

module.exports = nextConfig
