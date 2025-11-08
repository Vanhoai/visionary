import React, { useEffect, useRef } from "react"
import { ArrowDown, ChevronDown, Download } from "lucide-react"
import { Button } from "@/components/ui"

const Introduction: React.FC = () => {
    return (
        <div className="container mx-auto py-12 lg:py-20">
            <div className="min-h-[calc(100vh-240px)] flex items-center justify-center">
                <div className="h-full flex flex-col gap-2 text-gray-600 justify-center items-center">
                    <h3 className="text-xl">Hi, I'm Hinsun 👋🏻</h3>
                    <h1 className="text-2xl font-semibold text-green-600 mb-10">ML & SOFTWARE ENGINEER</h1>
                    <p className="text-lg text-center">
                        I’m a passionate developer who loves building things from the ground up — from system
                        architecture to efficient low-level algorithms. I’m deeply curious about how things work beneath
                        the surface, whether it’s in image processing, computer vision, or domain-driven system logic.
                        Turning complex concepts into clean, functional, and scalable code is what I truly enjoy.
                    </p>

                    <p className="text-lg text-center">
                        Beyond coding, I strive to keep learning, refining my mindset, and improving my craft. I value
                        clarity, precision, and elegance — not just in code, but in the way I approach problems and
                        design solutions. For me, development isn’t just about writing software; it’s about creating
                        systems that reflect thought, discipline, and purpose.
                    </p>

                    <div className="flex gap-3.5 mt-5">
                        <Button variant="default" className="bg-green-600 hover:bg-green-700 text-white">
                            Explore <ArrowDown />
                        </Button>

                        <Button>
                            Resume <Download />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction
