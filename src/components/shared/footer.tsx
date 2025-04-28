import { GithubSvg, LinkedinSvg, StarSvg } from "@/components"
import Image from "next/image"
import React from "react"

export const Footer: React.FC = () => {
    return (
        <footer className="container mx-auto flex flex-row border-t-4 mt-20 py-4 justify-between">
            <div className="flex flex-row gap-2 items-center">
                <h1 className="text-xl font-bold">Hinsun</h1>
                <Image src={StarSvg} alt="Star" className="w-[18px] h-[18px]" />
            </div>

            <div className="flex flex-row gap-1 items-center">
                <Image src={GithubSvg} alt="Github" className="w-[32px] h-[32px]" />
                <Image src={LinkedinSvg} alt="Linkedin" className="w-[32px] h-[32px]" />
            </div>
        </footer>
    )
}
