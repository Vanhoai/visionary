import { ArrowSvg, GroundSvg, PencilSvg } from "@/components"
import Image from "next/image"
import React from "react"

import { Playwrite_AU_SA } from "next/font/google"

const playwrite = Playwrite_AU_SA({ weight: "400" })

export const Todo: React.FC = () => {
    return (
        <div className="container mx-auto w-full mt-14">
            <div className="flex flex-col w-full justify-center items-center">
                <span className="relative mb-4 w-52 h-10">
                    <Image
                        src={GroundSvg}
                        alt="Ground"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
                    />

                    <p
                        className={`${playwrite.className} text-2xl text-center font-bold z-1 absolute top-0 left-0 right-0 bottom-0`}
                    >
                        what i do ?
                    </p>
                </span>

                <Image src={ArrowSvg} alt="Arrow" width={40} />
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10">
                <div className="relative bg-[#FFE68C] h-80 -rotate-4 border-2 border-[#EECD56] rounded-[4px] p-3 flex flex-col hover:-translate-y-10">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">Data Science</h3>

                    <p className="flex-1">
                        I design and develop scalable machine learning models and AI solutions, blending theory with
                        practical application.
                    </p>

                    <Image src={PencilSvg} alt="Pencil" width={32} />
                </div>

                <div className="bg-[#9DDCFF] h-80 rotate-6 border-2 border-[#5AB5E8] rounded-[4px] p-3 flex flex-col hover:-translate-y-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">Software Developer</h3>

                    <p className="flex-1">
                        I build efficient mobile and software systems, turning complex ideas into seamless, reliable
                        experiences.
                    </p>

                    <Image src={PencilSvg} alt="Pencil" width={32} />
                </div>

                <div className="bg-[#FFC9F0] h-80 -rotate-4 border-2 border-[#F384D4] rounded-[4px] p-3 flex flex-col hover:-translate-y-10">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">Writer & Educator</h3>

                    <p className="flex-1">
                        I write about AI, software development, and innovation, aiming to empower and inspire others on
                        their learning journeys.
                    </p>

                    <Image src={PencilSvg} alt="Pencil" width={32} />
                </div>
            </div>
        </div>
    )
}
