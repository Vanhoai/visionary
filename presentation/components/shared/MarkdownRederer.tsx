"use client"

import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

interface MarkdownRendererProps {
    content: string
    className?: string
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = "" }) => {
    return (
        <div className={`prose prose-slate max-w-none ${className}`}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    // Custom code block renderer with syntax highlighting
                    code({ node, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "")
                        const codeString = String(children).replace(/\n$/, "")

                        return match ? (
                            <SyntaxHighlighter
                                style={vscDarkPlus}
                                language={match[1]}
                                PreTag="div"
                                className="rounded-lg"
                                {...props}
                            >
                                {codeString}
                            </SyntaxHighlighter>
                        ) : (
                            <code className="bg-slate-100 text-pink-600 px-1.5 py-0.5 rounded text-sm" {...props}>
                                {children}
                            </code>
                        )
                    },
                    // Custom heading renderer
                    h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-3xl font-bold mt-6 mb-3">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-2xl font-bold mt-5 mb-2">{children}</h3>,
                    // Custom link renderer
                    a: ({ href, children }) => (
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline"
                        >
                            {children}
                        </a>
                    ),
                    // Custom image renderer with Next.js Image
                    img: ({ src, alt }) => (
                        <span className="block my-4">
                            <img src={src || ""} alt={alt || ""} className="rounded-lg max-w-full h-auto" />
                        </span>
                    ),
                    // Custom blockquote
                    blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-slate-600">
                            {children}
                        </blockquote>
                    ),
                    // Custom table
                    table: ({ children }) => (
                        <div className="overflow-x-auto my-4">
                            <table className="min-w-full divide-y divide-slate-200">{children}</table>
                        </div>
                    ),
                    th: ({ children }) => (
                        <th className="px-4 py-2 bg-slate-100 text-left font-semibold">{children}</th>
                    ),
                    td: ({ children }) => <td className="px-4 py-2 border-t border-slate-200">{children}</td>,
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}
