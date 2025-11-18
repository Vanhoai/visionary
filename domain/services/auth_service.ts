// shared modules
import { DomainResult } from "@/core"

// internal modules
import {
    AuthParams,
    AuthResponse,
    AuthSessionUseCase,
    OAuth2Params,
    OAuth2Response,
    RefreshTokenParams,
} from "../usecases/auth_usecases"
import { AuthRepository } from "../repositories/auth_repository"

export class AuthService implements AuthSessionUseCase {
    constructor(private authRepository: AuthRepository) {}

    async authWithEmailPassword(params: AuthParams): DomainResult<AuthResponse> {
        // Implement authentication logic here
        throw new Error("Method not implemented.")
    }

    async refreshToken(params: RefreshTokenParams): DomainResult<AuthResponse> {
        // Implement token refresh logic here
        throw new Error("Method not implemented.")
    }

    async oauth2Init(params: OAuth2Params): DomainResult<OAuth2Response> {
        // Implement OAuth2 initialization logic here
        throw new Error("Method not implemented.")
    }
}
