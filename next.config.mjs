/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'web.archive.org',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/courses/fashion-designer-cource',
        destination: '/courses/fashion-designer-course',
        permanent: true,
      },
      {
        source: '/courses/boutique-manager-cource',
        destination: '/courses/boutique-manager-course',
        permanent: true,
      },
      {
        source: '/courses/purchase-coordinator-electronics-cource',
        destination: '/courses/purchase-coordinator-electronics-course',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
