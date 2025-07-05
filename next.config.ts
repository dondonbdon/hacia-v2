import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    reactStrictMode: true,
    basePath: "/hacia-v2",
    assetPrefix: "/hacia-v2/",
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "hacachievers.com",
                pathname: "/wp-content/uploads/**",
            },
            {
                protocol: "https",
                hostname: "ui-avatars.com",
                pathname: "/api/**",
            },
        ],
    },
    trailingSlash: true,
};

export default nextConfig;