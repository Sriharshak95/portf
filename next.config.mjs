/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    basePath: '/portf' || '',
    images: {
        unoptimized: true
    }
};

export default nextConfig;
