import { DomainResult } from "@/core"

import {
    AuthParams,
    AuthResponse,
    OAuth2Params,
    OAuth2Response,
    RefreshTokenParams,
} from "../usecases"
import { AccountEntity } from "../entities"

export interface AuthRepository {
    signIn(params: AuthParams): DomainResult<AuthResponse>
    signUp(params: AuthParams): DomainResult<AccountEntity>
    refreshToken(params: RefreshTokenParams): DomainResult<AuthResponse>
    signOut(): DomainResult<boolean>
    oauth2Init: (params: OAuth2Params) => DomainResult<OAuth2Response>
}
