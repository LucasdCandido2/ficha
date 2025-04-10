/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't load prisma on the client side
      config.resolve.alias = {
        ...config.resolve.alias,
        '@prisma/client': false,
      }
    }
    return config
  },
}

module.exports = nextConfig 