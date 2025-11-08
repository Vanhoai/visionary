import React from "react"

const Footer: React.FC = () => {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto flex h-14 items-center justify-between">
                <div className="flex flex-row items-center gap-2.5 text-sm text-gray-600">
                    <span>©2025 Visionary</span>
                    <span className="w-1.5 h-1.5 rounded-xl bg-gray-700" />
                    <span>MIT Licensed</span>
                    <span className="w-1.5 h-1.5 rounded-xl bg-gray-700" />
                    <span>All rights reserved.</span>
                </div>

                <span className="text-sm text-gray-600">Terms of Use | Privacy Policy </span>
                <p className="text-sm text-gray-600">Built by Hinsun</p>
            </div>
        </footer>
    )
}

export default Footer
