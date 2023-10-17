import { PrismaClient } from '@prisma/client'
import { SectionRepository } from '../repository/section-repository'
import { SectionSavePayload, SectionUpdatePayload } from '../interface/section-interface'

export default class SectionService {
    private readonly sectionRepository: SectionRepository 
  
    constructor(public prismaClient: PrismaClient) {
      this.sectionRepository = new SectionRepository(prismaClient)
    }
    
    async getAll(){
      const sections = await this.sectionRepository.all();
      return { sections }
    }

    async getsection(id: number){
      const section = await this.sectionRepository.get(id);
      return { section }
    }

    async saveSection(payload: SectionSavePayload) {
      const section = await this.sectionRepository.saveSection(payload)
      return { section }
    }

    async updateSection(id: number, payload: SectionUpdatePayload) {
      const section = await this.sectionRepository.updateSection(id, payload)
      return { section }
    }

    async deleteSection(id: number){
      const section = await this.sectionRepository.deleteSection(id)
      return { section }
    }
}
