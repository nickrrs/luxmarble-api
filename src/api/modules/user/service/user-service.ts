import { PrismaClient } from '@prisma/client'
import { UserRepository } from '../repository/user-repository'
import { UserSavePayload } from '../interface/user-interface'

export default class UserService {
    private readonly userRepository: UserRepository 
  
    constructor(public prismaClient: PrismaClient) {
      this.userRepository = new UserRepository(prismaClient)
    }
  
    async saveUser(payload: UserSavePayload) {
      const user = await this.userRepository.saveUser(payload)
      return { user }
    }
}
