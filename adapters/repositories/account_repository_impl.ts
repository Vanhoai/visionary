import { AutoThrowFailure, Option } from "@/core"
import type { DomainResult } from "@/core/types"
import { AccountEntity } from "@/domain/entities"
import { AccountRepository } from "@/domain/repositories"

import { ApiService } from "../apis"

export class AccountRepositoryImpl implements AccountRepository {
    private findAccountByEmailEndpoint = "/accounts/find-account-with-email"

    constructor(private apiService: ApiService) {}

    async findCurrentAccount(): DomainResult<AccountEntity> {
        throw new Error("Method not implemented.")
    }

    async findAccountById(id: string): DomainResult<Option<AccountEntity>> {
        throw new Error("Method not implemented.")
    }

    @AutoThrowFailure
    async findAccountByEmail(
        email: string,
    ): DomainResult<Option<AccountEntity>> {
        return await this.apiService.get<Option<AccountEntity>>(
            this.findAccountByEmailEndpoint,
            {},
            { email },
        )
    }
}
