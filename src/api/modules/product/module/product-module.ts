import ProductRouter from "../routes/product-routes";
import { PrismaClient } from '@prisma/client'

export class ProductModule {
    public readonly productRouter: ProductRouter
    constructor(client: PrismaClient){
        this.productRouter = new ProductRouter(client);
        this.productRouter.store().update().delete().getAll();
    }

}