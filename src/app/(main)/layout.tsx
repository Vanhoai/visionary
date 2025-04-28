"use client"

import { Footer, Header } from "@/components"
import * as React from "react"

interface RootLayoutProps {
    children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    )
}

export default RootLayout
