"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { StarSvg } from "../ui"

const routes = [
    {
        path: "/",
        name: "Portfolio",
    },
    {
        path: "/blogs",
        name: "Blogs",
    },
    {
        path: "/projects",
        name: "Projects",
    },
    {
        path: "/about",
        name: "About Me",
    },
]

export const Header: React.FC = () => {
    const pathname = usePathname()

    return (
        <header className="w-full fixed top-0 left-0 right-0 z-50 bg-[#FEFFF0]">
            <div className="container mx-auto flex flex-row items-center h-[90px]">
                <div className="flex flex-row gap-2 items-center cursor-pointer">
                    <h1 className="text-3xl font-bold">Hinsun</h1>
                    <Image src={StarSvg} alt="Star" className="w-[26px] h-[26px]" />
                </div>

                <nav className="flex flex-1 flex-row items-center justify-end gap-4">
                    {routes.map((route) => {
                        return (
                            <Link
                                key={route.name}
                                href={route.path}
                                className="text-lg text-gray-900 hover:text-yellow-400"
                            >
                                <span>{route.name}</span>
                                <div
                                    className={`h-1 w-full ${pathname === route.path ? "bg-yellow-400" : "bg-transparent"}`}
                                ></div>
                            </Link>
                        )
                    })}
                </nav>
            </div>
        </header>
    )
}
