import { PrismaClient } from '@prisma/client'
import { Request, Response, Router } from 'express'
import ProductController from '../controller/product-controller'

export default class ProductRouter {
  public readonly router: Router = Router()
  private readonly controller: ProductController 

  constructor(public prismaClient: PrismaClient) {
    this.controller = new ProductController(prismaClient)
  }

  public getAll(){
    this.router.get('/all', (request: Request, response: Response) => {
      this.controller.getAll(request, response)
    })
    return this
  }

  public store() {
    this.router.post('/', (request: Request, response: Response) => {
      this.controller.saveProduct(request, response)
    })
    return this
  }

  public update(){
    this.router.patch('/:id', async (request: Request, response: Response) => {
      this.controller.updateProduct(request, response)
    })
    return this
  }

  public delete(){
    this.router.delete('/:id', async (request: Request, response: Response) => {
      this.controller.deleteProduct(request, response)
    })
    return this
  }

}
