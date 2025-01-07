/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const nextConfig = {
    output: "export",
    reactStrictMode: true
};

export default nextConfig;
