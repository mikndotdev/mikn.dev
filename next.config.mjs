import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        loader: "custom",
        loaderFile: "./imgLoader.ts",
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.mikn.dev",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "cdn.mdusercontent.com",
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
};

export default withNextIntl(nextConfig);
