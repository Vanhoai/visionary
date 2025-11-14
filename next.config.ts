import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    output: "export",
    images: {
        domains: ["i.pinimg.com"],
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === "production" ? "/visionary" : "",
    assetPrefix: process.env.NODE_ENV === "production" ? "/visionary/" : "",
    transpilePackages: ["@mdxeditor/editor"],
    webpack: (config) => {
        // this will override the experiments
        config.experiments = { ...config.experiments, topLevelAwait: true }
        // this will just update topLevelAwait property of config.experiments
        // config.experiments.topLevelAwait = true
        return config
    },
    turbopack: {},
}

export default nextConfig
