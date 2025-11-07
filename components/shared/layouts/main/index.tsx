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
            <main className="min-h-[calc(100vh-136px)]">{children}</main>
            <Footer />
        </React.Fragment>
    )
}
