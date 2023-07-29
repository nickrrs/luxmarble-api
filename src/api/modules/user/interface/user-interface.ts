import { User } from '@prisma/client'

// Fetch
export interface UserFetchPayload {

}

export interface UserFetchAllResponseDTO {
  users: User[]
}

export interface UserFetchOneResponseDTO {
  user: User
}

// Save
export interface UserSavePayload {
  name: string
  surname?: string
  email: string
  password: string
  active: boolean
}

// Update
export interface UserUpdatePayload {
  name?: string
  surname?: string
  email?: string
  password?: string
  active?: boolean
}

// Destroy
