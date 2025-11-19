import { AccountEntity } from "@/domain/entities"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface AccountStore {
    account: AccountEntity | null
    setAccount(account: AccountEntity | null): void
}

export const useAccountStore = create<AccountStore>()(
    persist(
        (set, get) => ({
            account: null,
            setAccount: (account) => set(() => ({ account })),
        }),
        {
            name: "auth-storage",
            storage: createJSONStorage(() => sessionStorage),
            partialize: (state) => ({
                account: state.account,
            }),
        },
    ),
)
