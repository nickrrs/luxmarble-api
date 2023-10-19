import { Product } from '@prisma/client'

// Fetch
export interface ProductFetchPayload {

}

export interface ProductFetchAllResponseDTO {
  Products: Product[]
}

export interface ProductFetchOneResponseDTO {
  Product: Product
}

// Save
export interface ProductSavePayload {
    name: string
    percentage?: string
    active?: boolean
}

// Update
export interface ProductUpdatePayload {
    name?: string
    percentage?: string
    active?: boolean
}

// Destroy
