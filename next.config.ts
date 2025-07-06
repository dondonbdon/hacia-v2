import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        unoptimized: false,
    },
};

export default nextConfig;