/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['newus-bucket.s3.ap-southeast-2.amazonaws.com'],
    // remotePatterns: ['newus-bucket.s3.ap-southeast-2.amazonaws.com'],
  },
};

export default nextConfig;
