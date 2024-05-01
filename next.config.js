/** @type {import('next').NextConfig} */
const withNextra = require("nextra")({
    theme: "nextra-theme-docs",
    themeConfig: "./pages/theme.config.jsx",
});

module.exports = withNextra({
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.mikn.dev",
                port: "",
                pathname: "/**",
            },
        ],
    },
});
