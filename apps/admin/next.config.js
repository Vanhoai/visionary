/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: { unoptimized: true },
    distDir: "build",
    assetPrefix: "/admin/",
};

export default nextConfig;
