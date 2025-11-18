import { Failure } from "./models"

export type Option<T> = T | null
export type DomainResult<T> = Promise<T | Failure>
