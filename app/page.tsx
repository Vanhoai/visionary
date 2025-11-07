import { MainLayout } from "@/components/shared"
import { Home } from "@/features"
import React from "react"

const HomePage: React.FC = () => {
    return (
        <MainLayout>
            <Home />
        </MainLayout>
    )
}

export default HomePage
