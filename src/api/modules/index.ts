import {Router} from "express";
import { PrismaClient } from '@prisma/client'
import { UserModule } from "./user/module/user-model";

const prismaClient = new PrismaClient();
const router: Router = Router();
const userModule = new UserModule(prismaClient);

//Exemplo 
router.use('/user', userModule.userRouter.router);

export {router}