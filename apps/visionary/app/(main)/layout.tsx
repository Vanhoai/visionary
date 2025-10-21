import { MainLayout } from "@workspace/ui/components"
import React from "react"

interface Layout {
  children: React.ReactNode
}

const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <MainLayout>
      <main>{children}</main>
    </MainLayout>
  )
}

export default Layout
