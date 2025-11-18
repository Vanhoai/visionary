// shared modules
import { DomainResult, Option } from "@/core"
import { AccountEntity } from "@/domain/entities"
import { AccountRepository } from "@/domain/repositories"

// internal modules
import { ApiService } from "../apis"

export class AccountRepositoryImpl implements AccountRepository {
    constructor(private apiService: ApiService) {}

    async findCurrentAccount(): DomainResult<AccountEntity> {
        throw new Error("Method not implemented.")
    }

    async findAccountById(id: string): DomainResult<Option<AccountEntity>> {
        throw new Error("Method not implemented.")
    }
}
