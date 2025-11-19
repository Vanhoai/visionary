import { DomainResult, Option } from "@/core"
import { AccountEntity } from "../entities/account_entity"

export interface AccountRepository {
    findCurrentAccount(): DomainResult<AccountEntity>
    findAccountById(id: string): DomainResult<Option<AccountEntity>>
    findAccountByEmail(email: string): DomainResult<Option<AccountEntity>>
    findProfile(): DomainResult<AccountEntity>
}
