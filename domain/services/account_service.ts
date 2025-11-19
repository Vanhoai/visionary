import {
    DomainResult,
    Failure,
    FailureCodes,
    isFailure,
    isSome,
    Validators,
} from "@/core"

import { ManageAccountUseCase } from "../usecases"
import { AccountRepository } from "../repositories"

export class AccountService implements ManageAccountUseCase {
    constructor(private accountRepository: AccountRepository) {}

    async checkAccountWithEmailExists(email: string): DomainResult<boolean> {
        if (email.trim().length === 0)
            return new Failure(
                FailureCodes.ValidationError,
                "Email cannot be empty",
            )

        if (!Validators.isValidEmail(email))
            return new Failure(
                FailureCodes.ValidationError,
                "Invalid email format",
            )

        const response = await this.accountRepository.findAccountByEmail(email)
        if (isFailure(response)) return response
        return isSome(response)
    }
}
