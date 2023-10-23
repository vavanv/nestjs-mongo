import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Res,
  Delete,
} from '@nestjs/common';
import { Response } from 'express';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Res() response: Response, @Body() product: Product) {
    try {
      const newProduct = await this.productService.create(product);
      return response.status(201).json(newProduct);
    } catch (error) {
      response.status(500).json({ message: `Error: ${error}` });
    }
  }

  @Get()
  async findAll(@Res() response: Response) {
    try {
      const prods = await this.productService.findAll();
      return response.status(201).json(prods);
    } catch (error) {
      response.status(500).json({ message: `Error: ${error}` });
    }
  }

  @Get(':id')
  async findOne(@Res() response: Response, @Param('id') id: string) {
    const prod = await this.productService.findProductById(id);
    if (!prod) {
      return response.status(404).json(`Product with id [${id}] not found`);
    }
    return response.status(201).json(prod);
  }

  @Delete(':id')
  async remove(@Res() response: Response, @Param('id') id: string) {
    try {
      const prod = await this.productService.delete(id);
      return response.status(201).json(`product with id [${prod.id}] deleted`);
    } catch (error) {
      response.status(500).json({ message: `Error: ${error}` });
    }
  }
}
