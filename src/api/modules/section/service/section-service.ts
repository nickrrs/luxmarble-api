import { PrismaClient } from '@prisma/client'
import { SectionRepository } from '../repository/section-repository'
import { SectionSavePayload, SectionUpdatePayload } from '../interface/section-interface'

export default class SectionService {
    private readonly sectionRepository: SectionRepository 
  
    constructor(public prismaClient: PrismaClient) {
      this.sectionRepository = new SectionRepository(prismaClient)
    }
    
    async getAll(){
      const users = await this.sectionRepository.all();
      return { users }
    }

    async getUser(id: number){
      const user = await this.sectionRepository.get(id);
      return { user }
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
