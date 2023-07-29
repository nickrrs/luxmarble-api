import { PrismaClient, User } from "@prisma/client";
import { UserSavePayload } from "../interface/user-interface";
import bcrypt from "bcrypt";

export class UserRepository{
    constructor(private readonly client: PrismaClient) {}

    public async saveUser(payload: UserSavePayload): Promise<User>{
        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(payload.password, salt)
        payload.password = hashPassword;

        return this.client.user.create({
            data: payload
        })
    }
}