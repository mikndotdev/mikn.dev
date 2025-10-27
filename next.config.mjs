import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./imgLoader.ts",
  },
  reactCompiler: true,
};

export default withNextIntl(nextConfig);
