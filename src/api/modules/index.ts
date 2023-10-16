import {Router} from "express";
import { PrismaClient } from '@prisma/client'
import { UserModule } from "./user/module/user-model";
import { SectionModule } from "./section/module/section-module";

const prismaClient = new PrismaClient();
const router: Router = Router();
const userModule = new UserModule(prismaClient);
const sectionModule = new SectionModule(prismaClient);

//Exemplo 
router.use('/user', userModule.userRouter.router);
router.use('/section', sectionModule.sectionRouter.router);

export {router}