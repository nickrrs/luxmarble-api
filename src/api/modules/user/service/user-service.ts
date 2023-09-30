import { PrismaClient } from '@prisma/client'
import { UserRepository } from '../repository/user-repository'
import { UserSavePayload, UserUpdatePayload } from '../interface/user-interface'

export default class UserService {
    private readonly userRepository: UserRepository 
  
    constructor(public prismaClient: PrismaClient) {
      this.userRepository = new UserRepository(prismaClient)
    }
    
    async getAll(){
      const users = await this.userRepository.all();
      return { users }
    }

    async getUser(id: number){
      const user = await this.userRepository.get(id);
      return { user }
    }

    async saveUser(payload: UserSavePayload) {
      const user = await this.userRepository.saveUser(payload)
      return { user }
    }

    async updateUser(id: number, payload: UserUpdatePayload) {
      const user = await this.userRepository.updateUser(id, payload)
      return { user }
    }

    async deleteUser(id: number){
      const user = await this.userRepository.deleteUser(id)
      return { user }
    }
}
