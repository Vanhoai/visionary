import { BaseEntity } from "./base_entity"

export interface AccountEntity extends BaseEntity {
    username: string
    avatar: string
    email: string
    emailVerified: boolean
    bio: string
    isActive: boolean
}
