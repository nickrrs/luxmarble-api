import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import UserService from '../service/user-service';
import bcrypt from "bcrypt";

export default class UserController {
  private readonly service: UserService 

  constructor(public prismaClient: PrismaClient) {
    this.service = new UserService(prismaClient)
  }

  public async saveUser(request: Request, response: Response) {
    try {
      const user = await this.service.saveUser(request.body)
      
      return response.json({
        user
      }).status(200);

    } catch (error: any) {
      return response.json({
        error: error.message
      }).status(500)
    }
  }

}
