import { MainLayout } from "@/presentation/components/shared"
import { Home } from "@/presentation/features"
import React from "react"

const HomePage: React.FC = () => {
    return (
        <MainLayout>
            <Home />
        </MainLayout>
    )
}

export default HomePage
