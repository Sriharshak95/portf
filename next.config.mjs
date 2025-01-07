/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    basePath: '/portf',
    assetPrefix: '/portf'
};

export default nextConfig;
