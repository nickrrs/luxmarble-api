import { PrismaClient } from '@prisma/client'
import { Request, Response, Router } from 'express'
import UserController from '../controller/user-controller'

export default class UserRouter {
  public readonly router: Router = Router()
  private readonly controller: UserController 

  constructor(public prismaClient: PrismaClient) {
    this.controller = new UserController(prismaClient)
  }

  public getAll(){
    this.router.get('/all', (request: Request, response: Response) => {
      this.controller.getAll(request, response)
    })
    return this
  }

  public store() {
    this.router.post('/store', (request: Request, response: Response) => {
      this.controller.saveUser(request, response)
    })
    return this
  }

  public update(){
    this.router.patch('/update/:id', async (request: Request, response: Response) => {
      this.controller.updateUser(request, response)
    })
    return this
  }

  public delete(){
    this.router.delete('/delete/:id', async (request: Request, response: Response) => {
      this.controller.deleteUser(request, response)
    })
    return this
  }

}
