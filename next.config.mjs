/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    'process.env.BACKEND_URL': !debug ? 'https://sriharshak95.github.io/portf' : ''
};

export default nextConfig;
