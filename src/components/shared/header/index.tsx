import React from "react"
import StarSvg from "../../../../public/star.svg"
import Image from "next/image"
import Link from "next/link"

export const Header: React.FC = () => {
    return (
        <header className="w-full">
            <div className="container mx-auto py-5 flex flex-row items-center">
                <div className="flex flex-row gap-2 items-center">
                    <h1 className="text-3xl font-bold">Hinsun</h1>
                    <Image src={StarSvg} alt="Star" className="w-[26px] h-[26px]" />
                </div>

                <nav className="flex flex-1 flex-row items-center justify-end gap-4">
                    <Link href="#" className="text-gray-500 hover:text-gray-700">
                        Portfolio
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-gray-700">
                        Blogs
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-gray-700">
                        Hire Me
                    </Link>
                </nav>
            </div>
        </header>
    )
}
