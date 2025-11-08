export function getAssetPath(path: string): string {
    const basePath = process.env.NODE_ENV === "production" ? "/visionary" : ""
    const normalizedPath = path.startsWith("/") ? path : `/${path}`
    return `${basePath}${normalizedPath}`
}
