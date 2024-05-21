/** @type {import('next').NextConfig} */


const nextConfig = ({
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
