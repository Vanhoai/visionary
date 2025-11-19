"use client"

import React, { useEffect } from "react"
import { useRouter } from "next/navigation"

import { useAccountStore, useAuthStore } from "@/presentation/store"

import Header from "./header"
import Footer from "./footer"
import { accountService } from "@/presentation/di"
import { isFailure } from "@/core"
import { toast } from "sonner"

interface MainLayoutProps {
    children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const router = useRouter()
    const { isAuthenticated } = useAuthStore()
    const { account, setAccount } = useAccountStore()

    React.useEffect(() => {
        const fetchAccount = async () => {
            const response = await accountService.findAccountProfile()
            if (isFailure(response)) {
                toast.error(
                    "Failed to fetch account profile. Please log in again.",
                )
                router.push("/auth")
                return
            }

            console.log({ response })
            setAccount(response)
        }

        if (!isAuthenticated) router.push("/auth")
        else if (isAuthenticated && !account) fetchAccount()
    }, [isAuthenticated, router])

    return (
        <React.Fragment>
            <Header />
            <main className="min-h-[calc(100vh-136px)]">{children}</main>
            <Footer />
        </React.Fragment>
    )
}
