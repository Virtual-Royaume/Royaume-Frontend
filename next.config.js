/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com"
      }
    ]
  },

  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/RxTN8tFUQH",
        permanent: true
      }
    ];
  }
}

module.exports = nextConfig
