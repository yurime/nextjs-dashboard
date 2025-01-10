/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental',
  },
};

export default nextConfig;
