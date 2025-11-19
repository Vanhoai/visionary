import { DomainResult } from "@/core"

import {
    AuthParams,
    AuthResponse,
    AuthSessionUseCase,
    OAuth2Params,
    OAuth2Response,
    RefreshTokenParams,
} from "../usecases"
import { AuthRepository } from "../repositories"
import { AccountEntity } from "../entities"

export class AuthService implements AuthSessionUseCase {
    constructor(private authRepository: AuthRepository) {}

    signIn(params: AuthParams): DomainResult<AuthResponse> {
        return this.authRepository.signIn(params)
    }

    signUp(params: AuthParams): DomainResult<AccountEntity> {
        return this.authRepository.signUp(params)
    }

    refreshToken(params: RefreshTokenParams): DomainResult<AuthResponse> {
        return this.authRepository.refreshToken(params)
    }

    signOut(): DomainResult<boolean> {
        return this.authRepository.signOut()
    }

    oauth2Init(params: OAuth2Params): DomainResult<OAuth2Response> {
        return this.authRepository.oauth2Init(params)
    }
}
