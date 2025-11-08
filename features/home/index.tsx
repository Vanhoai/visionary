"use client"

import React from "react"
import { Experiences, Introduction, Projects, Works } from "./components"

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Introduction />
            <div className="h-20 bg-gray-100" />
            <Experiences />
            <div className="h-20 bg-gray-100" />
            <Works />
            <div className="h-20 bg-gray-100" />
            <Projects />
        </React.Fragment>
    )
}

export default Home
