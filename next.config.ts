import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740",
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        // port: '',
        // pathname: '/my-bucket/**',
        // search: '',
      },
    ],
  },
};

export default nextConfig;
