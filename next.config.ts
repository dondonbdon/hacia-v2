const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repo = 'hacia-v2'; // 👈 This is your repo name

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: isGithubPages ? `/${repo}` : '',
    assetPrefix: isGithubPages ? `/${repo}/` : '',
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'hacachievers.com',
                pathname: '/wp-content/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'ui-avatars.com',
                pathname: '/api/**',
            }
        ]
    }
};

module.exports = nextConfig;
