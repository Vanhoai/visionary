import { ArrowTopRightSvg } from "@/assets"
import Image from "next/image"
import React from "react"

const projects = [
    {
        name: "Face Recognition",
        description: "A web application that uses machine learning to recognize faces in images.",
        image: "https://i.pinimg.com/736x/a5/31/cf/a531cf050a0f506ebca514366eff0dfb.jpg",
    },
    {
        name: "Image Classification with Vision Transformer",
        description: "A web application that uses machine learning to classify images.",
        image: "https://i.pinimg.com/736x/34/3a/97/343a97852d1a561dff8be7e17c5dd629.jpg",
    },
    {
        name: "Object Detection with YOLOv5",
        description: "A web application that uses machine learning to detect objects in images.",
        image: "https://i.pinimg.com/736x/a5/31/cf/a531cf050a0f506ebca514366eff0dfb.jpg",
    },
    {
        name: "Speech Recognition with Deep Learning",
        description: "A web application that uses machine learning to recognize speech.",
        image: "https://i.pinimg.com/736x/a5/31/cf/a531cf050a0f506ebca514366eff0dfb.jpg",
    },
]

export const Projects: React.FC = () => {
    return (
        <div className="container px-20 mx-auto mt-40">
            <div className="w-full flex flex-row justify-center gap-3 mb-10">
                <h1 className="text-3xl font-bold">Featured</h1>
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold">Projects</h1>
                    <span className="h-2 bg-yellow-400 w-full" />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
                {projects.map((project) => {
                    return (
                        <div key={project.name} className="flex flex-col cursor-pointer hover:-translate-y-2">
                            <div className="relative w-full h-[240px]">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="overflow-hidden rounded-sm border-4 border-gray-900"
                                />
                            </div>

                            <div className="flex flex-row mt-4 mb-2">
                                <h3 className="text-lg flex-1 line-clamp-1">{project.name}</h3>
                                <div className="relative w-8 h-8">
                                    <div className="absolute top-1 left-1 w-full h-full bg-[#929292]"></div>
                                    <div className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center">
                                        <Image src={ArrowTopRightSvg} alt="Arrow Top Right" width={16} height={16} />
                                    </div>
                                </div>
                            </div>
                            <p className="flex-1 text-sm line-clamp-3">{project.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
