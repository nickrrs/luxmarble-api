import UserRouter from "../routes/user-routes";
import { PrismaClient } from '@prisma/client'


export class UserModule {
    public readonly userRouter: UserRouter
    constructor(client: PrismaClient){
        this.userRouter = new UserRouter(client);
        this.userRouter.store().update().delete().getAll();
    }

}