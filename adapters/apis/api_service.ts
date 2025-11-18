export interface ApiConfig {
    baseUrl: string
    timeout?: number
    headers: Record<string, string>
}

export interface HttpResponse<T> {
    code: string
    message: string
    payload: T
}

export class ApiService {
    private baseUrl: string
    private timeout: number
    private defaultHeaders: Record<string, string>

    constructor(config: ApiConfig) {
        this.baseUrl = config.baseUrl
        this.timeout = config.timeout || 30000
        this.defaultHeaders = {
            "Content-Type": "application/json",
            ...config.headers,
        }
    }

    async get<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
        return this.call<T>("GET", endpoint, undefined, headers)
    }

    async post<T>(endpoint: string, body?: unknown, headers?: Record<string, string>): Promise<T> {
        return this.call<T>("POST", endpoint, body, headers)
    }

    async put<T>(endpoint: string, body?: unknown, headers?: Record<string, string>): Promise<T> {
        return this.call<T>("PUT", endpoint, body, headers)
    }

    async delete<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
        return this.call<T>("DELETE", endpoint, undefined, headers)
    }

    async patch<T>(endpoint: string, body?: unknown, headers?: Record<string, string>): Promise<T> {
        return this.call<T>("PATCH", endpoint, body, headers)
    }

    private async call<T>(
        method: string,
        endpoint: string,
        body?: unknown,
        headers?: Record<string, string>,
    ): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`

        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), this.timeout)

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    ...this.defaultHeaders,
                    ...headers,
                },
                body: body ? JSON.stringify(body) : undefined,
                signal: controller.signal,
            })

            clearTimeout(timeoutId)

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}))
                throw new Error(errorData.message || `HTTP Error ${response.status}`)
            }

            const payload = await response.json()
            return payload as T
        } catch (error) {
            clearTimeout(timeoutId)

            if (error instanceof Error) {
                if (error.name === "AbortError") {
                    throw new Error("Request timeout")
                }
                throw error
            }

            throw new Error("Unknown error occurred")
        }
    }

    withAuth(accessToken: string) {
        this.defaultHeaders["Authorization"] = `Bearer ${accessToken}`
    }

    removeAuth() {
        delete this.defaultHeaders["Authorization"]
    }
}

export const apiClient = new ApiService({
    baseUrl: "http://localhost:8080/api/v1",
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
    },
})
