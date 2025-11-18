"use client"

import * as React from "react"
const {
    MDXEditor: LibMDXEditor,
    headingsPlugin,
    toolbarPlugin,
    imagePlugin,
    codeMirrorPlugin,
    tablePlugin,
    listsPlugin,
    quotePlugin,
    thematicBreakPlugin,
    frontmatterPlugin,
    linkDialogPlugin,
    linkPlugin,
    codeBlockPlugin,
    sandpackPlugin,
    directivesPlugin,
    AdmonitionDirectiveDescriptor,
    diffSourcePlugin,
    markdownShortcutPlugin,
    // Toolbar components
    UndoRedo,
    BoldItalicUnderlineToggles,
    BlockTypeSelect,
    CodeToggle,
    CreateLink,
    DiffSourceToggleWrapper,
    InsertCodeBlock,
    InsertImage,
    InsertTable,
    InsertThematicBreak,
    ListsToggle,
    Separator,
    StrikeThroughSupSubToggles,
    ConditionalContents,
    ChangeCodeMirrorLanguage,
    ShowSandpackInfo,
    InsertSandpack,
} = await import("@mdxeditor/editor")
import { CodeBlockEditorDescriptor, SandpackConfig } from "@mdxeditor/editor"

import "@mdxeditor/editor/style.css"
import "./mdx.css"

interface MDXEditorProps {
    markdown: string
    onChange?: (markdown: string) => void
    readOnly?: boolean
    placeholder?: string
    className?: string
}

// Sandpack configuration for live code preview
const defaultSnippetContent = `
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
`.trim()

const simpleSandpackConfig: SandpackConfig = {
    defaultPreset: "react",
    presets: [
        {
            label: "React",
            name: "react",
            meta: "live react",
            sandpackTemplate: "react",
            sandpackTheme: "light",
            snippetFileName: "/App.js",
            snippetLanguage: "jsx",
            initialSnippetContent: defaultSnippetContent,
        },
        {
            label: "React TypeScript",
            name: "react-ts",
            meta: "live",
            sandpackTemplate: "react-ts",
            sandpackTheme: "light",
            snippetFileName: "/App.tsx",
            snippetLanguage: "tsx",
            initialSnippetContent: defaultSnippetContent,
        },
        {
            label: "Vanilla",
            name: "vanilla",
            meta: "live",
            sandpackTemplate: "vanilla",
            sandpackTheme: "light",
            snippetFileName: "/index.js",
            snippetLanguage: "javascript",
            initialSnippetContent: `console.log('Hello, world!')`,
        },
    ],
}

const MDXEditor: React.FC<MDXEditorProps> = ({
    markdown,
    onChange,
    readOnly = false,
    placeholder = "Start writing...",
    className = "",
}) => {
    return (
        <LibMDXEditor
            className={`mdx-editor border rounded-lg overflow-hidden min-h-[600px] ${className}`}
            onChange={onChange || console.log}
            markdown={markdown}
            readOnly={readOnly}
            placeholder={placeholder}
            contentEditableClassName="prose max-w-none p-4"
            plugins={[
                // Core plugins
                headingsPlugin({ allowedHeadingLevels: [1, 2, 3, 4, 5, 6] }),
                listsPlugin(),
                quotePlugin(),
                thematicBreakPlugin(),
                linkPlugin(),
                linkDialogPlugin(),
                tablePlugin(),
                imagePlugin({
                    imageAutocompleteSuggestions: [
                        "https://via.placeholder.com/150",
                        "https://via.placeholder.com/300",
                    ],
                    imageUploadHandler: async (image) => {
                        // Implement your image upload logic here
                        // For now, return a placeholder
                        return Promise.resolve("https://via.placeholder.com/300")
                    },
                }),

                // Code plugins with syntax highlighting
                codeBlockPlugin({
                    defaultCodeBlockLanguage: "python",
                    codeBlockEditorDescriptors: [],
                }),
                codeMirrorPlugin({
                    codeBlockLanguages: {
                        javascript: "JavaScript",
                        typescript: "TypeScript",
                        python: "Python",
                        rust: "Rust",
                        cpp: "C++",
                    },
                }),

                // Sandpack for live code preview
                sandpackPlugin({ sandpackConfig: simpleSandpackConfig }),

                // Directives for admonitions (note, warning, tip, etc.)
                directivesPlugin({
                    directiveDescriptors: [AdmonitionDirectiveDescriptor],
                }),

                // Front matter support
                frontmatterPlugin(),

                // Diff/Source view
                diffSourcePlugin({
                    viewMode: "rich-text",
                    diffMarkdown: "",
                }),

                // Markdown shortcuts
                markdownShortcutPlugin(),

                // Toolbar
                toolbarPlugin({
                    toolbarClassName: "bg-slate-50 border-b p-2 flex flex-wrap gap-1 sticky top-0 z-10",
                    toolbarContents: () => (
                        <React.Fragment>
                            <UndoRedo />
                            <Separator />

                            <BlockTypeSelect />
                            <Separator />

                            <BoldItalicUnderlineToggles />
                            <Separator />

                            <StrikeThroughSupSubToggles />
                            <Separator />

                            <CodeToggle />
                            <Separator />

                            <ListsToggle />
                            <Separator />

                            <CreateLink />
                            <Separator />

                            <InsertImage />
                            <Separator />

                            <ConditionalContents
                                options={[
                                    {
                                        when: (editor) => editor?.editorType === "codeblock",
                                        contents: () => <ChangeCodeMirrorLanguage />,
                                    },
                                    {
                                        fallback: () => (
                                            <>
                                                <InsertCodeBlock />
                                            </>
                                        ),
                                    },
                                ]}
                            />
                            <Separator />
                            <ConditionalContents
                                options={[
                                    {
                                        when: (editor) => editor?.editorType === "sandpack",
                                        contents: () => <ShowSandpackInfo />,
                                    },
                                    {
                                        fallback: () => (
                                            <>
                                                <InsertSandpack />
                                            </>
                                        ),
                                    },
                                ]}
                            />
                            <Separator />
                        </React.Fragment>
                    ),
                }),
            ]}
        />
    )
}

export default MDXEditor
