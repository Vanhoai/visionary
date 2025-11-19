import { Failure } from "./models"

export type Option<T> = T | null | undefined
export type DomainResult<T> = Promise<T | Failure>

export function isFailure<T>(value: T | Failure): value is Failure {
    return value instanceof Failure
}

export function isSome<T>(value: Option<T>): value is T {
    return value !== null && value !== undefined
}

export function isNone<T>(value: Option<T>): value is null {
    return value === null || value === undefined
}

export function mapOption<T, R>(value: Option<T>, fn: (val: T) => R): Option<R> {
    return isSome(value) ? fn(value) : null
}

export function flatMapOption<T, R>(value: Option<T>, fn: (val: T) => Option<R>): Option<R> {
    return isSome(value) ? fn(value) : null
}

export function getOrElse<T>(value: Option<T>, defaultValue: T): T {
    return isSome(value) ? value : defaultValue
}

export function getOrElseLazy<T>(value: Option<T>, fn: () => T): T {
    return isSome(value) ? value : fn()
}

export async function mapResult<T, R>(result: DomainResult<T>, fn: (val: T) => R): DomainResult<R> {
    const value = await result
    return isFailure(value) ? value : fn(value)
}

export async function flatMapResult<T, R>(result: DomainResult<T>, fn: (val: T) => DomainResult<R>): DomainResult<R> {
    const value = await result
    return isFailure(value) ? value : fn(value)
}

export async function getResultOrElse<T>(result: DomainResult<T>, defaultValue: T): Promise<T> {
    const value = await result
    return isFailure(value) ? defaultValue : value
}

export async function onSuccess<T>(result: DomainResult<T>, fn: (val: T) => void): DomainResult<T> {
    const value = await result
    if (!isFailure(value)) {
        fn(value)
    }
    return value
}

export async function onFailure<T>(result: DomainResult<T>, fn: (failure: Failure) => void): DomainResult<T> {
    const value = await result
    if (isFailure(value)) {
        fn(value)
    }
    return value
}

export async function recover<T>(result: DomainResult<T>, fn: (failure: Failure) => T): Promise<T> {
    const value = await result
    return isFailure(value) ? fn(value) : value
}

export async function recoverWith<T>(
    result: DomainResult<T>,
    fn: (failure: Failure) => DomainResult<T>,
): DomainResult<T> {
    const value = await result
    return isFailure(value) ? fn(value) : value
}
