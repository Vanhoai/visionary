import { DomainResult } from "@/core"
import { AuthRepository } from "@/domain/repositories"
import {
    AuthParams,
    AuthResponse,
    OAuth2Params,
    OAuth2Response,
    RefreshTokenParams,
} from "@/domain/usecases"

import { ApiService } from "../apis"

export class AuthRepositoryImpl implements AuthRepository {
    constructor(private apiService: ApiService) {}

    refreshToken(params: RefreshTokenParams): DomainResult<AuthResponse> {
        throw new Error("Method not implemented.")
    }

    authWithEmailPassword(params: AuthParams): DomainResult<AuthResponse> {
        throw new Error("Method not implemented.")
    }

    oauth2Init(params: OAuth2Params): DomainResult<OAuth2Response> {
        throw new Error("Method not implemented.")
    }
}
