import { DomainResult } from "@/core"

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
    authWithEmailPassword: (params: AuthParams) => DomainResult<AuthResponse>
    refreshToken: (params: RefreshTokenParams) => DomainResult<AuthResponse>
    oauth2Init: (params: OAuth2Params) => DomainResult<OAuth2Response>
}
