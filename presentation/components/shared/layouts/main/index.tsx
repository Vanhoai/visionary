"use client"

import * as React from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

import { isFailure } from "@/core"
import {
    useAccountStore,
    useAuthStore,
    useLoadingStore,
} from "@/presentation/store"
import { accountService } from "@/presentation/di"
import { Spinner } from "@/presentation/components/ui"

import Header from "./header"
import Footer from "./footer"

interface MainLayoutProps {
    children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const router = useRouter()
    const { isAuthenticated } = useAuthStore()
    const { account, setAccount } = useAccountStore()
    const { isGlobalLoading, message } = useLoadingStore()

    const fetchAccount = async () => {
        const response = await accountService.findAccountProfile()
        if (isFailure(response)) {
            toast.error("Failed to fetch account profile. Please log in again.")
            router.push("/auth")
            return
        }

        setAccount(response)
    }

    React.useEffect(() => {
        if (!isAuthenticated) router.push("/auth")
        else if (isAuthenticated && !account) fetchAccount()
    }, [isAuthenticated, router, fetchAccount])

    return (
        <React.Fragment>
            <Header />
            <main className="min-h-[calc(100vh-136px)]">{children}</main>
            <Footer />

            {isGlobalLoading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 transition-opacity pointer-events-none">
                    <Spinner className="size-8" color="white" />
                </div>
            )}
        </React.Fragment>
    )
}
