import { DomainResult } from "@/core"
import { AccountEntity } from "../entities"

export interface AuthParams {
    email: string
    password: string
}

export interface AuthResponse {
    accessToken: string
    refreshToken: string
}

export interface RefreshTokenParams {
    refreshToken: string
}

export interface OAuth2Params {
    provider: string
}

export interface OAuth2Response {
    authorizationUrl: string
    state: string
}

export interface AuthSessionUseCase {
    signIn: (params: AuthParams) => DomainResult<AuthResponse>
    signUp: (params: AuthParams) => DomainResult<AccountEntity>
    refreshToken: (params: RefreshTokenParams) => DomainResult<AuthResponse>
    signOut: () => DomainResult<boolean>
    oauth2Init: (params: OAuth2Params) => DomainResult<OAuth2Response>
}
