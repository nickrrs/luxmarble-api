import SectionRouter from "../routes/section-routes";
import { PrismaClient } from '@prisma/client'

export class SectionModule {
    public readonly sectionRouter: SectionRouter
    constructor(client: PrismaClient){
        this.sectionRouter = new SectionRouter(client);
        this.sectionRouter.store().update().delete().getAll();
    }

}