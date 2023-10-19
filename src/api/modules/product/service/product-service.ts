import { PrismaClient } from '@prisma/client'
import { ProductRepository } from '../repository/product-repository'
import { ProductSavePayload, ProductUpdatePayload } from '../interface/product-interface'

export default class ProductService {
    private readonly productRepository: ProductRepository 
  
    constructor(public prismaClient: PrismaClient) {
      this.productRepository = new ProductRepository(prismaClient)
    }
    
    async getAll(){
      const products = await this.productRepository.all();
      return { products }
    }

    async getProduct(id: number){
      const product = await this.productRepository.get(id);
      return { product }
    }

    async saveProduct(payload: ProductSavePayload) {
      const product = await this.productRepository.saveProduct(payload)
      return { product }
    }

    async updateProduct(id: number, payload: ProductUpdatePayload) {
      const product = await this.productRepository.updateProduct(id, payload)
      return { product }
    }

    async deleteProduct(id: number){
      const product = await this.productRepository.deleteProduct(id)
      return { product }
    }
}
