/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'export',
   images: {
      domains: ['localhost'],
      loader: 'imgix',
      path: 'https://localhost:3000/_next/image',
   },
   
}

module.exports = nextConfig
