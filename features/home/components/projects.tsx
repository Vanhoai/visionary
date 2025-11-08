"use client"

import React from "react"
import { GitHubDark } from "developer-icons"
import { Button, Separator } from "@/components/ui"

interface Project {
    id: number
    title: string
    description: string
    tags: string[]
    image?: string
    githubUrl: string
}

const projects: Project[] = [
    {
        id: 1,
        title: "HinsunMusic",
        description:
            "Hinsun Music is an application that allows you to download music from the server and listen offline directly on your phone.",
        tags: ["Kotlin", "Jetpack Compose"],
        githubUrl: "https://github.com",
    },
    {
        id: 2,
        title: "HinsunMusic",
        description:
            "Hinsun Music is an application that allows you to download music from the server and listen offline directly on your phone.",
        tags: ["Kotlin", "Jetpack Compose"],
        githubUrl: "https://github.com",
    },
    {
        id: 3,
        title: "HinsunMusic",
        description:
            "Hinsun Music is an application that allows you to download music from the server and listen offline directly on your phone.",
        tags: ["Kotlin", "Jetpack Compose"],
        githubUrl: "https://github.com",
    },
    {
        id: 4,
        title: "HinsunMusic",
        description:
            "Hinsun Music is an application that allows you to download music from the server and listen offline directly on your phone.",
        tags: ["Kotlin", "Jetpack Compose"],
        githubUrl: "https://github.com",
    },
    {
        id: 5,
        title: "HinsunMusic",
        description:
            "Hinsun Music is an application that allows you to download music from the server and listen offline directly on your phone.",
        tags: ["Kotlin", "Jetpack Compose"],
        githubUrl: "https://github.com",
    },
    {
        id: 6,
        title: "HinsunMusic",
        description:
            "Hinsun Music is an application that allows you to download music from the server and listen offline directly on your phone.",
        tags: ["Kotlin", "Jetpack Compose"],
        githubUrl: "https://github.com",
    },
]

// <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">Badge</span>
// <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 inset-ring inset-ring-red-600/10">Badge</span>
// <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 inset-ring inset-ring-yellow-600/20">Badge</span>
// <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20">Badge</span>
// <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 inset-ring inset-ring-blue-700/10">Badge</span>
// <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 inset-ring inset-ring-indigo-700/10">Badge</span>
// <span class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 inset-ring inset-ring-purple-700/10">Badge</span>
// <span class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 inset-ring inset-ring-pink-700/10">Badge</span>

const Projects: React.FC = () => {
    const randomBadge = (index: number) => {
        const classNames = [
            "inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 inset-ring inset-ring-blue-700/10",
            "inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20",
            "inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 inset-ring inset-ring-pink-700/10",
            "inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10",
            "inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 inset-ring inset-ring-red-600/10",
            "inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 inset-ring inset-ring-yellow-600/20",
            "inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 inset-ring inset-ring-indigo-700/10",
            "inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 inset-ring inset-ring-purple-700/10",
        ]

        return classNames[index]
    }

    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <h2 className="text-center text-3xl font-bold text-gray-300 mb-16">PROJECTS</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-card border rounded-lg overflow-hidden">
                            <div className="w-full h-48 bg-muted" />
                            <div className="p-4">
                                <div className="flex gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span key={`tag-${index}`} className={`${randomBadge(index)}`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Separator className="my-4" />

                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg font-bold">{project.title}</h3>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <GitHubDark className="w-5 h-5" />
                                    </a>
                                </div>

                                <p className="text-[16px] mb-4 line-clamp-4 text-gray-500">{project.description}</p>
                                <Button className="w-full cursor-pointer bg-green-600">Learn More</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
