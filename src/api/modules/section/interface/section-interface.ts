import { Section } from '@prisma/client'

// Fetch
export interface SectionFetchPayload {

}

export interface SectionFetchAllResponseDTO {
  Sections: Section[]
}

export interface SectionFetchOneResponseDTO {
  Section: Section
}

// Save
export interface SectionSavePayload {
    type: string
    title?: string
    slug?: string
    externalUrl?: string
    metaData?: string
    bannerUrl?: string
    buttonDescription?: string
    imageJson?: string
}

// Update
export interface SectionUpdatePayload {
    type?: string
    title?: string
    slug?: string
    externalUrl?: string
    metaData?: string
    bannerUrl?: string
    buttonDescription?: string
    imageJson?: string
}

// Destroy
