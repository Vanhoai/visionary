"use client"

import * as React from "react"
import { toast } from "sonner"

import {
    Button,
    Input,
    Label,
    Separator,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
    Spinner,
} from "@/presentation/components/ui"
import { accountService, authService } from "@/presentation/di"
import { isFailure } from "@/core"
import { useAuthStore } from "@/presentation/store"
import { useRouter } from "next/navigation"

const GoogleIcon = () => (
    <svg className="size-6" viewBox="0 0 24 24">
        <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
        />
        <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
        />
        <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
        />
        <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
        />
    </svg>
)

const GithubIcon = () => (
    <svg
        className="size-5"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M13 0C5.82075 0 0 5.91189 0 13.2036C0 19.3905 4.19467 24.5674 9.84967 26C9.789 25.8218 9.75 25.6149 9.75 25.3585V23.1018C9.22242 23.1018 8.33842 23.1018 8.11633 23.1018C7.22692 23.1018 6.43608 22.7134 6.05258 21.9916C5.62683 21.1895 5.55317 19.9627 4.498 19.2123C4.18492 18.9625 4.42325 18.6775 4.784 18.716C5.45025 18.9075 6.00275 19.3718 6.52275 20.0606C7.04058 20.7505 7.28433 20.9067 8.25175 20.9067C8.72083 20.9067 9.42283 20.8792 10.0837 20.7736C10.439 19.857 11.0533 19.0131 11.804 18.6148C7.475 18.1626 5.40908 15.9752 5.40908 13.0055C5.40908 11.727 5.94533 10.4902 6.85642 9.44824C6.55742 8.41397 6.1815 6.3047 6.97125 5.50148C8.91908 5.50148 10.0967 6.78443 10.3794 7.13102C11.3501 6.79323 12.4161 6.60178 13.5363 6.60178C14.6586 6.60178 15.7289 6.79323 16.7018 7.13322C16.9813 6.78883 18.1599 5.50148 20.1121 5.50148C20.9051 6.3058 20.5248 8.42387 20.2226 9.45595C21.1283 10.4957 21.6613 11.7292 21.6613 13.0055C21.6613 15.973 19.5986 18.1593 15.2761 18.6137C16.4656 19.2442 17.3333 21.0157 17.3333 22.3503V25.3585C17.3333 25.473 17.3084 25.5555 17.2954 25.6534C22.3611 23.85 26 18.9647 26 13.2036C26 5.91189 20.1793 0 13 0Z"
            fill="black"
        />
    </svg>
)

enum AuthMode {
    BEGIN,
    SIGN_IN,
    SIGN_UP,
}

const Auth: React.FC = () => {
    const router = useRouter()
    const { setAccessToken, setRefreshToken } = useAuthStore()

    const [mode, setMode] = React.useState<AuthMode>(AuthMode.BEGIN)
    const [email, setEmail] = React.useState<string>("hinsun.studio@gmail.com")
    const [password, setPassword] = React.useState<string>("vanhoai.adv123")
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const labelButton = React.useMemo(() => {
        switch (mode) {
            case AuthMode.BEGIN:
                return "Continue"
            case AuthMode.SIGN_IN:
                return "Sign In"
            case AuthMode.SIGN_UP:
                return "Sign Up"
        }
    }, [mode])

    const checkEmailExists = async () => {
        setIsLoading(true)
        const isExists = await accountService.checkAccountWithEmailExists(email)
        if (isFailure(isExists)) {
            toast.error(isExists.message)
            setIsLoading(false)
            return
        }

        if (isExists) {
            setMode(AuthMode.SIGN_IN)
            toast.success(
                "Account found! Please enter your password to sign in.",
            )
        } else {
            setMode(AuthMode.SIGN_UP)
            toast.success(
                "No account found! Please enter your password to create an account.",
            )
        }

        setIsLoading(false)
    }

    const signIn = async () => {
        setIsLoading(true)
        const response = await authService.signIn({ email, password })
        if (isFailure(response)) {
            toast.error(response.message)
            setIsLoading(false)
            return
        }

        toast.success("Signed in successfully!")
        setAccessToken(response.accessToken)
        setRefreshToken(response.refreshToken)
        setIsLoading(false)

        router.push("/")
    }

    const signUp = async () => {
        setIsLoading(true)
        const response = await authService.signUp({ email, password })
        if (isFailure(response)) {
            toast.error(response.message)
            setIsLoading(false)
            return
        }

        console.log({ response })
        toast.success("Signed up successfully!")
        setIsLoading(false)
    }

    const submit = () => {
        switch (mode) {
            case AuthMode.BEGIN:
                checkEmailExists()
                break
            case AuthMode.SIGN_IN:
                signIn()
                break
            case AuthMode.SIGN_UP:
                signUp()
                break
        }
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Welcome to Visionary</CardTitle>
                    <CardDescription>
                        Please{" "}
                        {mode === AuthMode.SIGN_IN
                            ? "sign in to your account"
                            : mode === AuthMode.SIGN_UP
                              ? "create an account"
                              : "enter your email to get started"}
                        .
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    className="h-11"
                                    id="email"
                                    type="email"
                                    placeholder="example@example.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={mode !== AuthMode.BEGIN}
                                />
                            </div>

                            {mode !== AuthMode.BEGIN && (
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">
                                            Password
                                        </Label>
                                        <a
                                            href="#"
                                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                        >
                                            Forgot your password?
                                        </a>
                                    </div>
                                    <Input
                                        className="h-11"
                                        id="password"
                                        type="password"
                                        required
                                        disabled={isLoading}
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                            )}
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button
                        type="submit"
                        className="w-full h-11 cursor-pointer"
                        onClick={submit}
                        disabled={isLoading}
                    >
                        {isLoading && <Spinner />}
                        {labelButton}
                    </Button>

                    <Separator className="my-4" />

                    <Button
                        variant="outline"
                        className="w-full h-11 mb-3 cursor-pointer"
                    >
                        <GoogleIcon />
                        Login with Google
                    </Button>

                    <Button
                        variant="outline"
                        className="w-full h-11 p-0 cursor-pointer"
                    >
                        <GithubIcon />
                        Login with Github
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Auth
