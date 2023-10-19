import { PrismaClient, Product } from "@prisma/client";
import { ProductSavePayload, ProductUpdatePayload } from "../interface/product-interface";

export class ProductRepository{
    constructor(private readonly client: PrismaClient) {}

    public all(): Promise<Array<Product>> {
        return this.client.product.findMany({})
      }

    public get(id: number): Promise<Product | null> {
        return this.client.product.findFirst({
          where: { id },
        })
    }

    public async saveProduct(payload: ProductSavePayload): Promise<Product>{
        return this.client.product.create({
            data: payload
        })
    }

    public async updateProduct(id: number, payload: ProductUpdatePayload): Promise<Product>{
        return this.client.product.update({
            where: { id },
            data: payload,
          })
    }

    public deleteProduct(id: number): Promise<Product> {
        return this.client.product.delete({
          where: { id },
        })
      }
}