import { auto_throw_failure, type DomainResult } from "@/core"
import { AuthRepository } from "@/domain/repositories"
import { AccountEntity } from "@/domain/entities"
import type {
    AuthParams,
    AuthResponse,
    OAuth2Params,
    OAuth2Response,
    RefreshTokenParams,
} from "@/domain/usecases"

import { ApiService } from "../apis"

export class AuthRepositoryImpl implements AuthRepository {
    private signInEndpoint = "/auth/sign-in"
    private signUpEndpoint = "/auth/sign-up"
    private refreshTokenEndpoint = "/auth/refresh-token"
    private signOutEndpoint = "/auth/sign-out"
    private oauth2InitEndpoint = "/auth/oauth2/init"

    constructor(private apiService: ApiService) {}

    @auto_throw_failure
    refreshToken(params: RefreshTokenParams): DomainResult<AuthResponse> {
        return this.apiService.post<AuthResponse>(
            this.refreshTokenEndpoint,
            params,
        )
    }

    @auto_throw_failure
    signIn(params: AuthParams): DomainResult<AuthResponse> {
        return this.apiService.post<AuthResponse>(this.signInEndpoint, params)
    }

    @auto_throw_failure
    signUp(params: AuthParams): DomainResult<AccountEntity> {
        return this.apiService.post<AccountEntity>(this.signUpEndpoint, params)
    }

    @auto_throw_failure
    oauth2Init(params: OAuth2Params): DomainResult<OAuth2Response> {
        return this.apiService.get<OAuth2Response>(this.oauth2InitEndpoint, {
            ...params,
        } as Record<string, string | number | boolean>)
    }

    @auto_throw_failure
    signOut(): DomainResult<boolean> {
        return this.apiService.post<boolean>(this.signOutEndpoint)
    }
}
