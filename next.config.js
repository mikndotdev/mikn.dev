/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "standalone",
    images: {
        loader: "custom",
        loaderFile: "./loader.ts",
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.mikn.dev",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "cdn.discordapp.com",
                port: "",
                pathname: "/avatars/**",
            },
            {
                protocol: "https",
                hostname: "cdn.statically.io",
                port: "",
                pathname: "/avatars/*",
            },
        ],
    },
    async redirects() {
        return [
          {
            source: '/account',
            destination: 'https://my.mikandev.com/',
            permanent: true,
          },
        ]
    }
};

module.exports = nextConfig;
