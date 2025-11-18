import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

interface AuthStore {
    isAuthenticated: boolean
    accessToken: string | null
    refreshToken: string | null
    setAccessToken: (token: string | null) => void
    setRefreshToken: (token: string | null) => void
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (set, get) => ({
            isAuthenticated: false,
            accessToken: null,
            refreshToken: null,
            setAccessToken: (token) =>
                set(() => ({
                    accessToken: token,
                    isAuthenticated: token ? true : false,
                })),
            setRefreshToken: (token) => set(() => ({ refreshToken: token })),
        }),
        {
            name: "auth-storage",
            storage: createJSONStorage(() => sessionStorage),
            partialize: (state) => ({
                accessToken: state.accessToken,
                refreshToken: state.refreshToken,
                isAuthenticated: state.isAuthenticated,
            }),
        },
    ),
)
