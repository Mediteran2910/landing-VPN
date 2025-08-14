import type { NextConfig } from "next";
import path from "path";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config: Configuration) {
    if (!config.resolve) config.resolve = {};
    if (!config.resolve.alias) config.resolve.alias = {};
    const alias = config.resolve.alias as { [key: string]: string };
    alias["@"] = path.resolve(__dirname, "src");

    return config;
  },
};

export default nextConfig;
