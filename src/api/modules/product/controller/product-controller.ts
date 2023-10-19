import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import ProductService from '../service/product-service';

export default class ProductController {
  private readonly service: ProductService 

  constructor(public prismaClient: PrismaClient) {
    this.service = new ProductService(prismaClient)
  }

  //fetch all products
  public async getAll(request: Request, response: Response){
    try{
      const products = await this.service.getAll();
      
      return response.json(products).status(200);
    } catch (error: any) {
      return response.json({
        error: error.message
      }).status(500)
    }
  }

  public async saveProduct(request: Request, response: Response) {
    try {
      const product = await this.service.saveProduct(request.body)
      
      return response.json({
        product
      }).status(200);

    } catch (error: any) {
      return response.json({
        error: error.message
      }).status(500)
    }
  }

  public async updateProduct(request: Request, response: Response){
    try {
      const productId = parseInt(request.params.id)
      let payload = request.body;

      const product = await this.service.updateProduct(productId, payload)
      
      return response.json({
        product
      }).status(200);
    } catch (error: any) {
      return response.json({
        error: error.message
      }).status(500)
    }
  }

  public async deleteProduct(request: Request, response: Response) {
    try {
      const productId = parseInt(request.params.id)
      const product = await this.service.deleteProduct(productId)

      return response.json({
        product
      }).status(200);
    } catch (error: any) {
      return response.json({
        error: error.message
      }).status(500)
    }
  }

}
