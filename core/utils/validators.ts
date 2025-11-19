const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export class Validators {
    static isValidEmail(email: string): boolean {
        return emailRegex.test(email)
    }
}
