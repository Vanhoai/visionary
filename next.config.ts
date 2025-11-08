import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    output: "export",
    images: {
        domains: ["i.pinimg.com"],
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === "production" ? "/visionary" : "",
    assetPrefix: process.env.NODE_ENV === "production" ? "/visionary/" : "",
}

export default nextConfig
