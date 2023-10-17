import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import SectionService from '../service/section-service';

export default class SectionController {
  private readonly service: SectionService 

  constructor(public prismaClient: PrismaClient) {
    this.service = new SectionService(prismaClient)
  }

  //fetch all sections
  public async getAll(request: Request, response: Response){
    try{
      const sections = await this.service.getAll();
      
      return response.json(sections).status(200);
    } catch (error: any) {
      return response.json({
        error: error.message
      }).status(500)
    }
  }

  public async saveSection(request: Request, response: Response) {
    try {
      const section = await this.service.saveSection(request.body)
      
      return response.json({
        section
      }).status(200);

    } catch (error: any) {
      return response.json({
        error: error.message
      }).status(500)
    }
  }

  public async updateSection(request: Request, response: Response){
    try {
      const sectionId = parseInt(request.params.id)
      let payload = request.body;

      const section = await this.service.updateSection(sectionId, payload)
      
      return response.json({
        section
      }).status(200);
    } catch (error: any) {
      return response.json({
        error: error.message
      }).status(500)
    }
  }

  public async deleteSection(request: Request, response: Response) {
    try {
      const sectionId = parseInt(request.params.id)
      const section = await this.service.deleteSection(sectionId)

      return response.json({
        section
      }).status(200);
    } catch (error: any) {
      return response.json({
        error: error.message
      }).status(500)
    }
  }

}
