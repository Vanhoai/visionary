import React from "react"
import Header from "./header"
import Footer from "./footer"

interface MainLayoutProps {
    children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    )
}
