import { PrismaClient, User } from "@prisma/client";
import { UserSavePayload, UserUpdatePayload } from "../interface/user-interface";
import bcrypt from "bcrypt";

export class UserRepository{
    constructor(private readonly client: PrismaClient) {}

    public all(): Promise<Array<User>> {
        return this.client.user.findMany({})
      }

    public get(id: number): Promise<User | null> {
        return this.client.user.findFirst({
          where: { id },
        })
    }

    public async saveUser(payload: UserSavePayload): Promise<User>{
        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(payload.password, salt)
        payload.password = hashPassword;

        return this.client.user.create({
            data: payload
        })
    }

    public async updateUser(id: number, payload: UserUpdatePayload): Promise<User>{
        return this.client.user.update({
            where: { id },
            data: payload,
          })
    }

    public deleteUser(id: number): Promise<User> {
        return this.client.user.delete({
          where: { id },
        })
      }
}