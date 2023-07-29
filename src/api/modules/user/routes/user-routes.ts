import { PrismaClient } from '@prisma/client'
import { Request, Response, Router } from 'express'
import UserController from '../controller/user-controller'

export default class UserRouter {
  public readonly router: Router = Router()
  private readonly controller: UserController 

  constructor(public prismaClient: PrismaClient) {
    this.controller = new UserController(prismaClient)
  }

  public store() {
    this.router.post('/store', (request: Request, response: Response) => {
      console.log(request.body);
      this.controller.saveUser(request, response)
    })
    return this
  }

}
