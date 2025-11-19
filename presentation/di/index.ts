import { apiClient } from "@/adapters/apis"
import { AccountRepositoryImpl, AuthRepositoryImpl } from "@/adapters/repositories"
import { AccountRepository, AuthRepository } from "@/domain/repositories"
import { AccountService, AuthService } from "@/domain/services"

// Repositories
const authRepository: AuthRepository = new AuthRepositoryImpl(apiClient)
const accountRepository: AccountRepository = new AccountRepositoryImpl(apiClient)

// Services (implementations of use cases)
export const authService: AuthService = new AuthService(authRepository)
export const accountService: AccountService = new AccountService(accountRepository)
