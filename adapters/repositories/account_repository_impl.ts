import { auto_throw_failure, Failure, FailureCodes, Option } from "@/core"
import type { DomainResult } from "@/core/types"
import { AccountEntity } from "@/domain/entities"
import { AccountRepository } from "@/domain/repositories"

import { ApiService } from "../apis"
import { useAuthStore } from "@/presentation/store"

export class AccountRepositoryImpl implements AccountRepository {
    private findAccountByEmailEndpoint = "/accounts/find-account-with-email"
    private findProfileEndpoint = "/accounts/find-profile"

    constructor(private apiService: ApiService) {}

    async findCurrentAccount(): DomainResult<AccountEntity> {
        throw new Error("Method not implemented.")
    }

    async findAccountById(id: string): DomainResult<Option<AccountEntity>> {
        throw new Error("Method not implemented.")
    }

    @auto_throw_failure
    findAccountByEmail(email: string): DomainResult<Option<AccountEntity>> {
        return this.apiService.get<Option<AccountEntity>>(
            this.findAccountByEmailEndpoint,
            { email },
        )
    }

    @auto_throw_failure
    findProfile(): DomainResult<AccountEntity> {
        const { accessToken } = useAuthStore()
        if (!accessToken)
            throw new Failure(
                FailureCodes.Unauthorized,
                "No access token found",
            )

        this.apiService.withAuth(accessToken)
        return this.apiService.get<AccountEntity>(this.findProfileEndpoint)
    }
}
