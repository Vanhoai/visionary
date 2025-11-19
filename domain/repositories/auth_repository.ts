import { DomainResult } from "@/core"

import { AuthParams, AuthResponse, OAuth2Params, OAuth2Response, RefreshTokenParams } from "../usecases/auth_usecases"

export interface AuthRepository {
    refreshToken(params: RefreshTokenParams): DomainResult<AuthResponse>
    authWithEmailPassword(params: AuthParams): DomainResult<AuthResponse>
    oauth2Init: (params: OAuth2Params) => DomainResult<OAuth2Response>
}
