import { Failure } from "./models"

export function auto_throw_failure(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
) {
    const originalMethod = descriptor.value

    descriptor.value = async function (...args: any[]) {
        try {
            return await originalMethod.apply(this, args)
        } catch (error) {
            return error as Failure
        }
    }

    return descriptor
}
