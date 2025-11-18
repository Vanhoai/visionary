export interface EncryptedData {
    ciphertext: string // Base64 encoded
    iv: string // Initialization Vector (Base64)
    salt: string // Salt for key derivation (Base64)
    tag?: string // Authentication tag (Base64)
}

export class Cryptography {
    private algorithm = "AES-GCM"
    private keyLength = 256
    private ivLength = 12 // 96 bits for GCM
    private saltLength = 16
    private iterations = 100000 // PBKDF2 iterations

    async generateKey(): Promise<CryptoKey> {
        return await crypto.subtle.generateKey(
            {
                name: this.algorithm,
                length: this.keyLength,
            },
            true, // extractable
            ["encrypt", "decrypt"],
        )
    }

    async deriveKeyFromPassword(password: string, salt?: Uint8Array): Promise<{ key: CryptoKey; salt: Uint8Array }> {
        // Generate or use provided salt
        const keySalt: Uint8Array<ArrayBufferLike> = salt || crypto.getRandomValues(new Uint8Array(this.saltLength))

        // Convert password to key material
        const passwordBuffer = new TextEncoder().encode(password)
        const keyMaterial = await crypto.subtle.importKey("raw", passwordBuffer, "PBKDF2", false, [
            "deriveBits",
            "deriveKey",
        ])

        // Derive key using PBKDF2
        const key = await crypto.subtle.deriveKey(
            {
                name: "PBKDF2",
                salt: keySalt,
                iterations: this.iterations,
                hash: "SHA-256",
            },
            keyMaterial,
            {
                name: this.algorithm,
                length: this.keyLength,
            },
            false, // not extractable for security
            ["encrypt", "decrypt"],
        )

        return { key, salt: keySalt }
    }

    async encrypt(data: string, password: string): Promise<EncryptedData> {
        try {
            // Derive key from password
            const { key, salt } = await this.deriveKeyFromPassword(password)

            // Generate random IV
            const iv = crypto.getRandomValues(new Uint8Array(this.ivLength))

            // Convert data to buffer
            const dataBuffer = new TextEncoder().encode(data)

            // Encrypt
            const encryptedBuffer = await crypto.subtle.encrypt(
                {
                    name: this.algorithm,
                    iv: iv,
                },
                key,
                dataBuffer,
            )

            // Convert to base64
            return {
                ciphertext: this.arrayBufferToBase64(encryptedBuffer),
                iv: this.arrayBufferToBase64(iv),
                salt: this.arrayBufferToBase64(salt),
            }
        } catch (error) {
            console.error("Encryption error:", error)
            throw new Error("Failed to encrypt data")
        }
    }

    async decrypt(encryptedData: EncryptedData, password: string): Promise<string> {
        try {
            // Convert from base64
            const ciphertext = this.base64ToArrayBuffer(encryptedData.ciphertext)
            const iv = this.base64ToArrayBuffer(encryptedData.iv)
            const salt = new Uint8Array(this.base64ToArrayBuffer(encryptedData.salt))

            // Derive key from password using same salt
            const { key } = await this.deriveKeyFromPassword(password, salt)

            // Decrypt
            const decryptedBuffer = await crypto.subtle.decrypt(
                {
                    name: this.algorithm,
                    iv: iv,
                },
                key,
                ciphertext,
            )

            // Convert to string
            return new TextDecoder().decode(decryptedBuffer)
        } catch (error) {
            console.error("Decryption error:", error)
            throw new Error("Failed to decrypt data - wrong password or corrupted data")
        }
    }

    async encryptObject<T>(obj: T, password: string): Promise<EncryptedData> {
        const jsonString = JSON.stringify(obj)
        return await this.encrypt(jsonString, password)
    }

    async decryptObject<T>(encryptedData: EncryptedData, password: string): Promise<T> {
        const jsonString = await this.decrypt(encryptedData, password)
        return JSON.parse(jsonString) as T
    }

    generateRandomString(length: number = 32): string {
        const array = new Uint8Array(length)
        crypto.getRandomValues(array)
        return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("")
    }

    async hash(data: string): Promise<string> {
        const buffer = new TextEncoder().encode(data)
        const hashBuffer = await crypto.subtle.digest("SHA-256", buffer)
        return this.arrayBufferToBase64(hashBuffer)
    }

    private arrayBufferToBase64(buffer: ArrayBuffer): string {
        const bytes = new Uint8Array(buffer)
        let binary = ""
        for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i])
        }
        return btoa(binary)
    }

    private base64ToArrayBuffer(base64: string): ArrayBuffer {
        const binary = atob(base64)
        const bytes = new Uint8Array(binary.length)
        for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i)
        }
        return bytes.buffer
    }
}
