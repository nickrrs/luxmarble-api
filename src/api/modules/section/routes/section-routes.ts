import { PrismaClient } from '@prisma/client'
import { Request, Response, Router } from 'express'
import SectionController from '../controller/section-controller'

export default class SectionRouter {
  public readonly router: Router = Router()
  private readonly controller: SectionController 

  constructor(public prismaClient: PrismaClient) {
    this.controller = new SectionController(prismaClient)
  }

  public getAll(){
    this.router.get('/all', (request: Request, response: Response) => {
      this.controller.getAll(request, response)
    })
    return this
  }

  public store() {
    this.router.post('/', (request: Request, response: Response) => {
      this.controller.saveSection(request, response)
    })
    return this
  }

  public update(){
    this.router.patch('/:id', async (request: Request, response: Response) => {
      this.controller.updateSection(request, response)
    })
    return this
  }

  public delete(){
    this.router.delete('/:id', async (request: Request, response: Response) => {
      this.controller.deleteSection(request, response)
    })
    return this
  }

}
