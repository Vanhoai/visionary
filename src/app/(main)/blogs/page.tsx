"use client"

import { GroundSvg } from "@/assets"
import { topics } from "@/store"
import Image from "next/image"
import React from "react"

const blogs = [
    {
        name: "Linear Algebra for Machine Learning",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        published: new Date("2023-01-01"),
    },
    {
        name: "Statistics & Probability for Machine Learning",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        published: new Date("2023-01-01"),
    },
    {
        name: "Matrix Calculus for Machine Learning",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        published: new Date("2023-01-01"),
    },
    {
        name: "Introduction to Data Structure & Algorithms",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        published: new Date("2023-01-01"),
    },
    {
        name: "Build Neural Network from Scratch",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        published: new Date("2023-01-01"),
    },
    {
        name: "Read paper and build Faster R-CNN with Keras",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        published: new Date("2023-01-01"),
    },
]

const Blogs = () => {
    return (
        <div className="container mx-auto pt-[90px] px-20">
            <div className="overflow-x-auto gap-3 flex whitespace-nowrap scrollbar-hide scroll-smooth mt-10 mb-5">
                {topics.map((topic) => {
                    return (
                        <div key={topic} className="relative bg-white h-32 border-3 w-[360px]">
                            {/* <div className="absolute top-1 left-1 w-full h-full bg-gray-700 z-0" /> */}

                            <div className="absolute top-0 left-0 right-0 bottom-0 z-1 p-4 flex flex-col justify-between">
                                <div className="relative h-12">
                                    <h2 className={`text-lg text-wrap line-clamp-2 absolute top-0 left-0 z-1`}>
                                        {topic}
                                    </h2>
                                    <Image
                                        src={GroundSvg}
                                        alt="Ground"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
                                    />
                                </div>

                                <p>10 articles</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <h3>Latest Articles</h3>

            <div className="flex flex-col gap-5">
                {blogs.map((blog) => {
                    return (
                        <div key={blog.name} className="flex flex-row">
                            <div className="flex flex-1 flex-col me-3">
                                <h1 className="text-lg font-bold">{blog.name}</h1>
                                <p className="text-[16px] line-clamp-2 flex-1 mt-1.5 mb-2">{blog.description}</p>
                                <p>🌟 {blog.published.toLocaleString()}</p>
                            </div>
                            <Image
                                src="/blogs/faster_rcnn.jpg"
                                alt="FasterRCNN"
                                width={120}
                                height={120}
                                objectFit="cover"
                                className="w-[120px] h-[120px]"
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Blogs
