"use client"

import { Footer, Header } from "@/components"
import * as React from "react"

interface RootLayoutProps {
    children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <div className="w-full bg-[#FEFFF0]">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default RootLayout
