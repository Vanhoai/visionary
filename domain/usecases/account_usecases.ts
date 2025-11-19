import { DomainResult } from "@/core"

export interface ManageAccountUseCase {
    checkAccountWithEmailExists(email: string): DomainResult<boolean>
}
