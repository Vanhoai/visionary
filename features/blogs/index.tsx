"use client"

import React, { useState } from "react"
import { Search, Star, Eye } from "lucide-react"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    Separator,
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Checkbox,
    Label,
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui"
import Image from "next/image"
import { DocumentSvg } from "@/core"

interface Blog {
    id: number
    title: string
    author: string
    authorAvatar?: string
    date: string
    description: string
    stars: number
    views: number
    category: string
}

const mockBlogs: Blog[] = [
    {
        id: 1,
        title: "MLP from Scratch: Implement Backpropagation by Hand and Pytorch",
        author: "Hinsun",
        date: "Oct 10, 2025",
        description:
            "The Model Context Protocol (MCP) promises to unify AI tools, saving you money on subscriptions. So why has it failed to gain traction? We'll look at the technical and market hurdles holding it back.",
        stars: 100,
        views: 100,
        category: "Machine Learning",
    },
    {
        id: 2,
        title: "MLP from Scratch: Implement Backpropagation by Hand and Pytorch",
        author: "Hinsun",
        date: "Oct 10, 2025",
        description:
            "The Model Context Protocol (MCP) promises to unify AI tools, saving you money on subscriptions. So why has it failed to gain traction? We'll look at the technical and market hurdles holding it back.",
        stars: 100,
        views: 100,
        category: "Machine Learning",
    },
    {
        id: 3,
        title: "MLP from Scratch: Implement Backpropagation by Hand and Pytorch",
        author: "Hinsun",
        date: "Oct 10, 2025",
        description:
            "The Model Context Protocol (MCP) promises to unify AI tools, saving you money on subscriptions. So why has it failed to gain traction? We'll look at the technical and market hurdles holding it back.",
        stars: 100,
        views: 100,
        category: "DSA",
    },
    {
        id: 4,
        title: "MLP from Scratch: Implement Backpropagation by Hand and Pytorch",
        author: "Hinsun",
        date: "Oct 10, 2025",
        description:
            "The Model Context Protocol (MCP) promises to unify AI tools, saving you money on subscriptions. So why has it failed to gain traction? We'll look at the technical and market hurdles holding it back.",
        stars: 100,
        views: 100,
        category: "Mathematics",
    },
]

const categories = ["All Categories", "Mathematics", "Machine Learning", "DSA"]

const Blogs: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Categories")
    const [searchQuery, setSearchQuery] = useState("")
    const [sortBy, setSortBy] = useState("Latest")
    const [vectorSimilarity, setVectorSimilarity] = useState(false)

    const filteredBlogs = mockBlogs.filter((blog) => {
        const matchesCategory = selectedCategory === "All Categories" || blog.category === selectedCategory
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className="bg-[#FAFAFA]">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
                    <div className="bg-white border rounded-sm p-5">
                        <div>
                            <h2 className="text-[16px] font-normal">Filter & Sort Blogs</h2>
                            <Separator className="my-4" />

                            <div className="w-full mb-4">
                                <h3 className="text-[16px] font-normal mb-2.5">Sort By</h3>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Latest" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="latest">Latest</SelectItem>
                                            <SelectItem value="most_viewed">Most Viewed</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <h3 className="text-[16px] font-normal mb-2.5">Category</h3>
                                <div className="space-y-2">
                                    {categories.map((category) => (
                                        <div key={category} className="flex items-center gap-3">
                                            <Checkbox id={category} />
                                            <Label htmlFor={category} className="text-[16px] font-normal text-gray-600">
                                                {category}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Search course"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 border rounded-md bg-background"
                                />
                            </div>
                        </div>

                        <div className="bg-white border rounded-sm p-5">
                            {filteredBlogs.map((blog, index) => (
                                <article key={blog.id}>
                                    <h2 className="text-lg font-medium text-gray-700 mb-3 hover:underline cursor-pointer">
                                        {blog.title}
                                    </h2>

                                    <div className="flex items-center gap-2 mb-3">
                                        <Avatar className="w-8 h-8">
                                            <AvatarImage src={blog.authorAvatar} />
                                            <AvatarFallback>{blog.author[0]}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-sm text-muted-foreground">By {blog.author}</span>
                                            <span className="size-1.5 bg-gray-600 rounded-full" />
                                            <span className="text-sm text-muted-foreground">{blog.date}</span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                        {blog.description}
                                    </p>

                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <Star className="w-6 h-6 fill-orange-400 text-orange-400" />
                                            <span className="text-[16px]">{blog.stars}</span>

                                            <span className="size-1.5 bg-gray-600 rounded-full mx-2" />

                                            <Image src={DocumentSvg} alt="Viewer" width={20} height={20} />
                                            <span className="text-[16px]">{blog.views}</span>
                                        </div>
                                    </div>

                                    {index !== filteredBlogs.length - 1 && <Separator className="my-4" />}
                                </article>
                            ))}
                        </div>

                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" isActive>
                                        2
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs
