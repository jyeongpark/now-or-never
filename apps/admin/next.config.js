/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverActions: true,
  transpilePackages: ['@non/ui'], // 패키지를 transpiling하겠다.
};

module.exports = nextConfig;
