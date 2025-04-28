"use client"

import { Footer, Header, Hero, Projects, Skills, Todo } from "@/components"
import React from "react"

const Home: React.FC = () => {
    return (
        <div className="w-full bg-[#FEFFF0]">
            <Header />
            <Hero />
            <Todo />
            <Skills />
            <Projects />
            <Footer />
        </div>
    )
}

export default Home
