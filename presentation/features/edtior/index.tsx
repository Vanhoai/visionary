"use client"

import * as React from "react"
import dynamic from "next/dynamic"

const MDXEditor = dynamic(() => import("@/presentation/components/shared/MDXEditor"), { ssr: false })

const Editor: React.FC = () => {
    const [markdown, setMarkdown] = React.useState(`# Welcome to MDX Editor

    This is a **powerful** editor with:

    - Full markdown support
    - Syntax highlighting
    - Live code preview
    - Tables, images, and more!

    ## Code Example

    \`\`\`javascript
    function hello() {
        console.log("Hello, World!")
    }
    \`\`\`

    > This is a quote

    Check out the toolbar for more features!`)

    return (
        <div className="container mx-auto my-6">
            <h1 className="text-3xl font-bold mb-4">MDX Editor</h1>
            <MDXEditor markdown={markdown} onChange={setMarkdown} placeholder="Start writing your content..." />
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-2">Markdown Output:</h2>
                <pre className="bg-gray-100 p-4 rounded overflow-auto">{markdown}</pre>
            </div>
        </div>
    )
}

export default Editor
