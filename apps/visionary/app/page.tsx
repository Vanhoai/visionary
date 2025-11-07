import Home from "@/features/home"
import { MainLayout } from "@workspace/ui/components"
import React from "react"

const HomeRoute: React.FC = () => {
    return (
        <MainLayout>
            <Home />
        </MainLayout>
    )
}

export default HomeRoute
