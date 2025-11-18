"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { MarkdownRenderer } from "@/presentation/components/shared"
import { Button } from "@/presentation/components/ui/button"
import { Input } from "@/presentation/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/presentation/components/ui/tabs"
import { toast } from "sonner"

// Dynamic import MDXEditor to avoid SSR issues
const MDXEditor = dynamic(() => import("@/presentation/components/shared/MDXEditor"), {
    ssr: false,
    loading: () => (
        <div className="border rounded-lg min-h-[600px] flex items-center justify-center">
            <p className="text-slate-500">Loading editor...</p>
        </div>
    ),
})

const Studio: React.FC = () => {
    const [markdown, setMarkdown] = React.useState("")
    const [documentId, setDocumentId] = React.useState("default")
    const [isLoading, setIsLoading] = React.useState(false)
    const [isSaving, setIsSaving] = React.useState(false)

    React.useEffect(() => {
        loadMarkdown(documentId)
    }, [])

    const loadMarkdown = async (id: string) => {
        setIsLoading(true)
        try {
            const response = await fetch(`/api/markdown?id=${id}`)
            const data = await response.json()

            if (data.success) {
                setMarkdown(data.content || "# Welcome to Studio\n\nStart writing your content here...")
                toast("Document loaded successfully!", {
                    description: `Loaded document ID: ${id}`,
                })
            } else {
                toast.info("Document not found, starting a new one.")
            }
        } catch (error) {
            console.error("Error loading markdown:", error)
            toast.info("Error loading document")
        } finally {
            setIsLoading(false)
        }
    }

    // Save markdown lên server
    const saveMarkdown = async () => {
        setIsSaving(true)
        try {
            const response = await fetch("/api/markdown", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: documentId,
                    content: markdown,
                }),
            })

            const data = await response.json()

            if (data.success) {
                toast.success("Document saved successfully!")
            } else {
                toast.info("Failed to save document")
            }
        } catch (error) {
            console.error("Error saving markdown:", error)
            toast.info("Error saving document")
        } finally {
            setIsSaving(false)
        }
    }

    // Load document khác
    const handleLoadDocument = () => {
        if (documentId.trim()) {
            loadMarkdown(documentId)
        }
    }

    return (
        <div className="container mx-auto my-6 space-y-4">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Studio</h1>

                {/* Document Controls */}
                <div className="flex items-center gap-2">
                    <Input
                        type="text"
                        placeholder="Document ID"
                        value={documentId}
                        onChange={(e) => setDocumentId(e.target.value)}
                        className="w-48"
                    />
                    <Button onClick={handleLoadDocument} variant="outline" disabled={isLoading}>
                        {isLoading ? "Loading..." : "Load"}
                    </Button>
                    <Button onClick={saveMarkdown} disabled={isSaving}>
                        {isSaving ? "Saving..." : "Save"}
                    </Button>
                </div>
            </div>

            {/* Tabs for Edit and Preview */}
            <Tabs defaultValue="edit" className="w-full">
                <TabsList className="grid w-full grid-cols-2 max-w-md">
                    <TabsTrigger value="edit">Edit</TabsTrigger>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>

                <TabsContent value="edit" className="mt-4">
                    {isLoading ? (
                        <div className="border rounded-lg min-h-[600px] flex items-center justify-center">
                            <p className="text-slate-500">Loading document...</p>
                        </div>
                    ) : (
                        <MDXEditor
                            markdown={markdown}
                            onChange={setMarkdown}
                            placeholder="Start writing your markdown content..."
                        />
                    )}
                </TabsContent>

                <TabsContent value="preview" className="mt-4">
                    <div className="border rounded-lg p-8 min-h-[600px] bg-white">
                        <MarkdownRenderer content={markdown} />
                    </div>
                </TabsContent>
            </Tabs>

            {/* Character/Word Count */}
            <div className="text-sm text-slate-500 text-right">
                {markdown.length} characters · {markdown.split(/\s+/).filter(Boolean).length} words
            </div>
        </div>
    )
}

export default Studio
