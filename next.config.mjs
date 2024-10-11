import nextra from 'nextra'

/** @type {import('next').NextConfig} */
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  
  
})

const nextConfig = {
  ...withNextra(),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}
 
export default nextConfig