/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: { unoptimized: true },
    ...(process.env.NODE_ENV === "production" && {
        assetPrefix: "/visionary/",
    }),
    distDir: "build",
};

export default nextConfig;

