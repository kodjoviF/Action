// next.config.mjs
import withPWA from '@ducanh2912/next-pwa'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // autres configurations Next.js...
}

export default withPWA({
  ...nextConfig,
  pwa: {
    dest: 'public',
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    disable: process.env.NODE_ENV === 'development',
    workboxOptions: {
      disableDevLogs: true,
    },
    // Exclusion recommandée pour Next.js
    exclude: [
      /middleware-manifest\.json$/,
      /_middleware\.js$/,
      /_middleware\.js\.map$/,
      /middleware-runtime\.js$/,
      /server\/pages-manifest\.json$/,
      /chunks\/images\/.*$/ // Exclut les images optimisées
    ]
  }
})