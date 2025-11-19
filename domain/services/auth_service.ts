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

export class AuthService implements AuthSessionUseCase {
    constructor(private authRepository: AuthRepository) {}

    authWithEmailPassword(params: AuthParams): DomainResult<AuthResponse> {
        return this.authRepository.authWithEmailPassword(params)
    }

    refreshToken(params: RefreshTokenParams): DomainResult<AuthResponse> {
        return this.authRepository.refreshToken(params)
    }

    oauth2Init(params: OAuth2Params): DomainResult<OAuth2Response> {
        return this.authRepository.oauth2Init(params)
    }
}
