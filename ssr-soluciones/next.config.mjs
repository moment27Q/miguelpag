/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false
      config.parallelism = 1
    }
    return config
  },
}

export default nextConfig
