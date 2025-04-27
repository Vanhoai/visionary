"use client"

import { Footer, Header, Hero } from "@/components"
import React from "react"

const Home: React.FC = () => {
    return (
        <div className="w-full">
            <Header />
            <Hero />
            <Footer />
        </div>
    )
}

export default Home
