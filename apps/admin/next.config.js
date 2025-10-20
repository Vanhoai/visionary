/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: { unoptimized: true },
    distDir: "build",
    basePath: "/admin",
    assetPrefix: "/admin/",
};

export default nextConfig;


