import type { Metadata } from "next"
import localFont from "next/font/local"
import { GoogleOAuthProvider } from "@react-oauth/google"
import "@workspace/ui/styles/globals.css"

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
})
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
})

export const metadata: Metadata = {
    title: "Visionary",
    description: "Visionary Studio by Hinsun",
}

const clientId = "1037380077909-d148fru7b5rj3ufnk16a6uqbed19cq14.apps.googleusercontent.com"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <GoogleOAuthProvider clientId={clientId}>{children}</GoogleOAuthProvider>
            </body>
        </html>
    )
}
