import type { NextConfig } from "next"
import createMDX from "@next/mdx"
import remarkMath from "remark-math"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import rehypeMathjax from "rehype-mathjax"
import rehypeSlug from "rehype-slug"
import rehypeHighlight from "rehype-highlight"

const mathjaxConfig = {
    tex: {
        inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"],
        ],
        processEscapes: true,
        tags: "ams",
    },
    tex2jax: {
        inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"],
        ],
        processEscapes: true,
    },
}

const nextConfig: NextConfig = {
    images: {
        domains: ["i.pinimg.com", "raw.githubusercontent.com"],
    },
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
}

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkGfm, [remarkParse, { fragment: true }], remarkMath],
        rehypePlugins: [rehypeSlug, rehypeHighlight, [rehypeMathjax, mathjaxConfig]],
    },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
