/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Github https://avatars.githubusercontent.com/u/56843328?v=4
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/**',
      },
      // Spotify CDN https://i.scdn.co/image/ab67616d00001e0297ed7b212715424daac8c600
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        pathname: '/image/**',
      }
    ]
  }
}

module.exports = nextConfig
