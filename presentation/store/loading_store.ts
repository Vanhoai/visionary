import { create } from "zustand"

interface LoadingStore {
    isGlobalLoading: boolean
    message: string | null
    setIsGlobalLoading(isGlobalLoading: boolean, message: string | null): void
}

export const useLoadingStore = create<LoadingStore>((set) => ({
    isGlobalLoading: false,
    message: null,
    setIsGlobalLoading: (isGlobalLoading, message) =>
        set(() => ({ isGlobalLoading, message })),
}))
