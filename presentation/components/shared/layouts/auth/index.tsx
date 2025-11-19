"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { useAuthStore } from "@/presentation/store"

interface AuthLayoutProps {
    children: React.ReactNode
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    const router = useRouter()
    const { isAuthenticated } = useAuthStore()

    React.useEffect(() => {
        if (isAuthenticated) router.replace("/")
    }, [isAuthenticated, router])

    return <React.Fragment>{children}</React.Fragment>
}
