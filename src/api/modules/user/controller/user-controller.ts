import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import UserService from '../service/user-service';
import bcrypt from "bcrypt";

export default class UserController {
  private readonly service: UserService 

  constructor(public prismaClient: PrismaClient) {
    this.service = new UserService(prismaClient)
  }

  //fetch all users
  public async getAll(request: Request, response: Response){
    try{
      const users = await this.service.getAll();
      
      return response.json(users).status(200);
    } catch (error: any) {
      return response.json({
        error: error.message
      }).status(500)
    }
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

  public async updateUser(request: Request, response: Response){
    try {
      const userId = parseInt(request.params.id)
      let payload = request.body;

      if (request.body.password) {
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(request.body.password, salt);
        payload = {
          ...payload,
          password: hashPassword,
        };
      }

      const user = await this.service.updateUser(userId, payload)
      
      return response.json({
        user
      }).status(200);
    } catch (error: any) {
      return response.json({
        error: error.message
      }).status(500)
    }
  }

  public async deleteUser(request: Request, response: Response) {
    try {
      const userId = parseInt(request.params.id)
      const user = await this.service.deleteUser(userId)

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
