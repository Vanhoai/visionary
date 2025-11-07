"use client"

import { useGoogleLogin } from "@react-oauth/google"
import { Button } from "@workspace/ui/components"
import React from "react"

const Home: React.FC = () => {
    const googleSignIn = useGoogleLogin({
        onSuccess: (codeResponse) => console.log(codeResponse),
        flow: "auth-code",
    })

    return (
        <div className="container">
            <Button className="cursor-pointer" onClick={googleSignIn}>
                Sign in with Google
            </Button>

            <Button className="cursor-pointer" onClick={() => {}}>
                Github
            </Button>
        </div>
    )
}

export default Home
