"use client"

import React from "react"
import { useRouter } from "next/navigation"

import { useAuthStore } from "@/presentation/store"

import Header from "./header"
import Footer from "./footer"

interface MainLayoutProps {
    children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const router = useRouter()
    const { isAuthenticated } = useAuthStore()

    React.useEffect(() => {
        if (!isAuthenticated) router.push("/auth")
    }, [isAuthenticated, router])

    return (
        <React.Fragment>
            <Header />
            <main className="min-h-[calc(100vh-136px)]">{children}</main>
            <Footer />
        </React.Fragment>
    )
}
