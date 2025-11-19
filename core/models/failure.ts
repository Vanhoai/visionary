export enum FailureCodes {
    TimeoutError = "TimeoutError",
    NetworkError = "NetworkError",
    BadRequest = "BadRequest",
    Unauthorized = "Unauthorized",
    Forbidden = "Forbidden",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    MethodNotAllowed = "MethodNotAllowed",
    UnknownFailure = "UnknownFailure",
    Conflict = "Conflict",
    DatabaseError = "DatabaseError",
    ValidationError = "ValidationError",
    NotImplemented = "NotImplemented",
    InternalError = "InternalError",
    ExternalServiceError = "ExternalServiceError",
}

export class Failure extends Error {
    code: string
    message: string

    constructor(code: FailureCodes = FailureCodes.BadRequest, message: string) {
        super(message)
        this.code = code.toString()
        this.message = message
    }
}
