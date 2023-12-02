/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://manuthecoder.pages.dev',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
