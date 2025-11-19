import { DomainResult } from "@/core"
import { AccountEntity } from "../entities"

export interface ManageAccountUseCase {
    checkAccountWithEmailExists(email: string): DomainResult<boolean>
    findAccountProfile(): DomainResult<AccountEntity>
}
