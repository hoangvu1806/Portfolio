import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    poweredByHeader: false,
    env: {
        PORT: process.env.NODE_ENV === "production" ? "8000" : "8001",
    },
    experimental: {
        serverMinification: true,
    },
    output: "standalone",
};

export default nextConfig;
