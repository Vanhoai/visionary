"use client"

import * as React from "react"
import "./globals.css"
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

interface RootLayoutProps {
    children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <React.Fragment>
            <html
                lang="en"
                suppressHydrationWarning
                className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-500 scrollbar-track-slate-300 scrollbar-w-1 overflow-y-scroll"
            >
                <body suppressHydrationWarning className={spaceGrotesk.className}>
                    {children}
                </body>
            </html>
        </React.Fragment>
    )
}

export default RootLayout
